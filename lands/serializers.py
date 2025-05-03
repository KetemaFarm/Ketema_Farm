from rest_framework import serializers
from .models import Land, LandBooking
from users.serializers import SimpleUserSerializer


class LandSerializer(serializers.ModelSerializer):
    owner = SimpleUserSerializer(read_only=True)

    class Meta:
        model = Land
        fields = ['id', 'title', 'description', 'city', 'size', 'price',
                  'image', 'is_available', 'owner', 'created_at']
        read_only_fields = ['owner', 'created_at']


class LandBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandBooking
        fields = ['id', 'land', 'farmer', 'start_date', 'end_date',
                  'is_confirmed', 'created_at']
        read_only_fields = ['farmer', 'created_at', 'is_confirmed']


