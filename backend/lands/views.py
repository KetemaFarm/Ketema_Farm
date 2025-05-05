from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Land, LandBooking
from .serializers import LandSerializer, LandBookingSerializer
from .permissions import IsLandOwner, IsFarmer
from users.models import User
from django.shortcuts import get_object_or_404


class LandListView(generics.ListCreateAPIView):
    queryset = Land.objects.all()
    serializer_class = LandSerializer
    permission_classes = [AllowAny]  # Anyone can view

    def get_queryset(self):
        queryset = super().get_queryset()
        city = self.request.query_params.get('city')
        if city:
            queryset = queryset.filter(city=city)
        return queryset

    def create(self, request, *args, **kwargs):
        if not request.user.is_authenticated or request.user.role != 'LANDOWNER':
            return Response(
                {"error": "Only authenticated landowners can create land listings"},
                status=status.HTTP_403_FORBIDDEN
            )
        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Land.objects.all()
    serializer_class = LandSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsLandOwner()]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"message": "Land listing deleted successfully"},
            status=status.HTTP_204_NO_CONTENT
        )


class LandBookingView(generics.CreateAPIView):
    queryset = LandBooking.objects.all()
    serializer_class = LandBookingSerializer
    permission_classes = [IsAuthenticated, IsFarmer]

    def create(self, request, *args, **kwargs):
        land_id = kwargs.get('id')
        land = get_object_or_404(Land, id=land_id)

        if not land.is_available:
            return Response(
                {"error": "This land is not available for booking"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(land=land, farmer=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
