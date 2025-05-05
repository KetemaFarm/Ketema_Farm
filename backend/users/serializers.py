from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.core.files.base import ContentFile
import base64


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['phone', 'username', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'required': False}  # Make username optional
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            phone=validated_data['phone'],
            password=validated_data['password'],
            role=validated_data['role'],
            username=validated_data.get('username')  # Optional
        )
        return user


class LoginSerializer(serializers.Serializer):
    phone = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(phone=data['phone'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        return user


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            token = RefreshToken(self.token)
            token.blacklist()
        except TokenError:
            self.fail('bad_token')


class ProfilePictureField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            # Handle base64 encoded image
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name=f'profile.{ext}')
        return super().to_internal_value(data)


class ProfileSerializer(serializers.ModelSerializer):
    profile_picture = ProfilePictureField(required=False)
    statistics = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 'phone', 'email','username',
            'role', 'date_joined', 'last_login', 'profile_picture',
            'statistics'
        ]
        read_only_fields = [
            'id', 'phone', 'role', 'date_joined', 'last_login',
            'statistics'
        ]

    def get_statistics(self, obj):
        from products.models import Product  # Avoid circular imports
        stats = {}

        if obj.role == 'FARMER':
            stats['products_count'] = Product.objects.filter(farmer=obj).count()
        elif obj.role == 'BUYER':
            # Add your purchase count logic here when you implement purchases
            stats['purchases_count'] = 0  # Placeholder

        return stats


class SimpleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'phone', 'first_name', 'last_name', 'role']
