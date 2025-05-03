from rest_framework import serializers
from .models import Product, ProductOrder
from users.serializers import SimpleUserSerializer


class ProductSerializer(serializers.ModelSerializer):
    city = serializers.ChoiceField(choices=Product.CITY_CHOICES)
    farmer = SimpleUserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'category', 'quantity', 'image', 'city', 'farmer']
        read_only_fields = ['farmer', 'created_at']

    def create(self, validated_data):
        validated_data['farmer'] = self.context['request'].user
        return super().create(validated_data)


class ProductOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductOrder
        fields = ['id', 'product', 'quantity', 'total_price', 'delivery_address', 'status', 'created_at']
        read_only_fields = ['id', 'total_price', 'status', 'created_at']

    def validate_quantity(self, value):
        product = self.context['product']
        if value > product.quantity:
            raise serializers.ValidationError("Requested quantity exceeds available stock")
        return value
