from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer, ProfileSerializer
from .models import User
from users.models import User
from products.models import Product
from products.serializers import ProductSerializer

from lands.models import Land
from lands.serializers import LandSerializer


class RegisterAPI(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered"}, status=201)
        return Response(serializer.errors, status=400)


class LoginAPI(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "role": user.role
            })
        return Response(serializer.errors, status=401)


class LogoutAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({"message": "Logout successful."}, status=status.HTTP_205_RESET_CONTENT)
            except Exception:
                return Response({"error": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#
# class ProfileAPI(APIView):
#     permission_classes = [AllowAny]  # Allow anyone to view profiles
#
#     def get(self, request, id=None):
#         try:
#             user_id = id if id else request.user.id if request.user.is_authenticated else None
#             if user_id is None:
#                 return Response(
#                     {"error": "User ID required for anonymous users"},
#                     status=status.HTTP_400_BAD_REQUEST
#                 )
#
#             user = User.objects.get(id=user_id)
#             products = Product.objects.filter(farmer=user)
#
#             profile_data = ProfileSerializer(user).data
#             products_data = ProductSerializer(products, many=True).data
#
#             response = {
#                 "profile": profile_data,
#                 "products": products_data,
#                 "products_count": len(products_data)
#             }
#
#             return Response(response)
#
#         except User.DoesNotExist:
#             return Response(
#                 {"error": "User not found"},
#                 status=status.HTTP_404_NOT_FOUND
#             )
#
#     def patch(self, request, id=None):
#         if not request.user.is_authenticated:
#             return Response(
#                 {"error": "Authentication required"},
#                 status=status.HTTP_401_UNAUTHORIZED
#             )
#
#         if id is None:
#             user = request.user
#         else:
#             if int(id) != request.user.id and not request.user.is_staff:
#                 return Response(
#                     {"error": "You can only update your own profile"},
#                     status=status.HTTP_403_FORBIDDEN
#                 )
#             try:
#                 user = User.objects.get(id=id)
#             except User.DoesNotExist:
#                 return Response(
#                     {"error": "User not found"},
#                     status=status.HTTP_404_NOT_FOUND
#                 )
#
#         serializer = ProfileSerializer(
#             user,
#             data=request.data,
#             partial=True
#         )
#
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#
#         return Response(
#             serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST
#         )


class ProfileAPI(APIView):
    permission_classes = [AllowAny]  # Allow anyone to view profiles

    def get(self, request, id=None):
        try:
            user_id = id if id else request.user.id if request.user.is_authenticated else None
            if user_id is None:
                return Response(
                    {"error": "User ID required for anonymous users"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            user = User.objects.get(id=user_id)
            products = Product.objects.filter(farmer=user)

            profile_data = ProfileSerializer(user).data
            products_data = ProductSerializer(products, many=True).data

            # Initialize response with common data
            response = {
                "profile": profile_data,
                "products": products_data,
                "products_count": len(products_data)
            }

            # Add lands data if user is a landowner
            if user.role == 'LANDOWNER':
                lands = Land.objects.filter(owner=user)
                lands_data = LandSerializer(lands, many=True).data
                response['lands'] = lands_data
                response['lands_count'] = len(lands_data)

            return Response(response)

        except User.DoesNotExist:
            return Response(
                {"error": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )

    def patch(self, request, id=None):
        if not request.user.is_authenticated:
            return Response(
                {"error": "Authentication required"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        if id is None:
            user = request.user
        else:
            if int(id) != request.user.id and not request.user.is_staff:
                return Response(
                    {"error": "You can only update your own profile"},
                    status=status.HTTP_403_FORBIDDEN
                )
            try:
                user = User.objects.get(id=id)
            except User.DoesNotExist:
                return Response(
                    {"error": "User not found"},
                    status=status.HTTP_404_NOT_FOUND
                )

        serializer = ProfileSerializer(
            user,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
