from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Product,User
from .serializers import ProductSerializer, ProductOrderSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, ProductOrder
from .permissions import IsBuyer
import requests
from django.conf import settings


class IsFarmerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # Allow all GET/HEAD/OPTIONS requests (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True
        # Only allow farmers for write operations
        return request.user.is_authenticated and request.user.role == 'FARMER'

    def has_object_permission(self, request, view, obj):
        # Allow all GET/HEAD/OPTIONS requests (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True
        # Only allow the owner farmer to modify
        return obj.farmer == request.user


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.filter(farmer__is_active=True)
    serializer_class = ProductSerializer
    permission_classes = [IsFarmerOrReadOnly]  # Removed IsAuthenticated
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'city']

    def get_queryset(self):
        return self.queryset.all()

    def perform_create(self, serializer):
        if not (self.request.user.is_authenticated and self.request.user.role == 'FARMER'):
            raise PermissionDenied("Only authenticated farmers can create products")
        serializer.save(farmer=self.request.user)


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.filter(farmer__is_active=True)
    serializer_class = ProductSerializer
    permission_classes = [IsFarmerOrReadOnly]

    def perform_update(self, serializer):
        if serializer.instance.farmer != self.request.user:
            raise PermissionDenied("You do not own this product")
        serializer.save()

    def perform_destroy(self, instance):
        if instance.farmer != self.request.user:
            raise PermissionDenied("You do not own this product")
        instance.delete()


class ProductOrderView(APIView):
    permission_classes = [IsBuyer]

    def post(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductOrderSerializer(
            data=request.data,
            context={'product': product, 'request': request}
        )

        if serializer.is_valid():
            # First create the order
            order = serializer.save(
                product=product,
                buyer=request.user,
                status='PENDING'
            )

            # Prepare Chapa payment
            chapa_url = "https://api.chapa.co/v1/transaction/initialize"
            headers = {
                "Authorization": f"Bearer {settings.CHAPA_SECRET_KEY}",
                "Content-Type": "application/json"
            }
            payload = {
                "amount": str(order.total_price),
                "currency": "ETB",
                "email": request.user.email,
                "first_name": request.user.first_name or "Customer",
                "last_name": request.user.last_name or "",
                "tx_ref": f"product_order_{order.id}",
                "callback_url": f"{settings.BASE_URL}/api/products/{order.id}/payment-callback/",
                "return_url": f"{settings.FRONTEND_URL}/orders/{order.id}/",
                "customization": {
                    "title": "KetemaFarm Payment",
                    "description": f"Payment for {product.name}"
                }
            }

            try:
                response = requests.post(chapa_url, json=payload, headers=headers)
                response.raise_for_status()
                payment_data = response.json()

                # Save the transaction ID
                order.chapa_transaction_id = payment_data.get('data', {}).get('id')
                order.save()

                return Response({
                    "order_id": order.id,
                    "payment_url": payment_data['data']['checkout_url']
                }, status=status.HTTP_201_CREATED)

            except requests.exceptions.RequestException as e:
                order.delete()  # Remove the order if payment fails
                return Response(
                    {"error": "Payment gateway error", "details": str(e)},
                    status=status.HTTP_503_SERVICE_UNAVAILABLE
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#this view is for collback but it's not yet functional
class PaymentCallbackView(APIView):
    def post(self, request, pk):
        order = ProductOrder.objects.get(pk=pk)

        # Verify payment with Chapa
        chapa_url = f"https://api.chapa.co/v1/transaction/verify/{order.chapa_transaction_id}"
        headers = {
            "Authorization": f"Bearer {settings.CHAPA_SECRET_KEY}"
        }

        try:
            response = requests.get(chapa_url, headers=headers)
            response.raise_for_status()
            payment_data = response.json()

            if payment_data['status'] == 'success':
                order.status = 'PAID'
                order.save()
                # Reduce product quantity
                order.product.quantity -= order.quantity
                order.product.save()

                return Response({"status": "Payment verified"}, status=status.HTTP_200_OK)

            return Response({"status": "Payment failed"}, status=status.HTTP_400_BAD_REQUEST)

        except requests.exceptions.RequestException:
            return Response(
                {"error": "Payment verification failed"},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )