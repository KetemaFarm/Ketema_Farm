from django.db import models
from users.models import User


class Product(models.Model):
    CATEGORIES = [
        ('VEGETABLES', 'Vegetables'),
        ('FRUITS', 'Fruits'),
        ('CEREALS', 'Cereals'),
        ('FLOWERS', 'Flowers'),
        ('TOOLS', 'Tools'),
    ]
    CITY_CHOICES = [
        ('ADDIS_ABABA', 'Addis Ababa'),
        ('ADAMA', 'Adama'),
        ('BAHIR_DAR', 'Bahir Dar'),
        ('GONDAR', 'Gondar'),
        ('MEKELLE', 'Mekelle'),
        ('DIRE_DAWA', 'Dire Dawa'),
        ('HAWASSA', 'Hawassa'),
        ('JIMMA', 'Jimma'),
        ('HARAR', 'Harar'),
        ('ASSOSA', 'Assosa'),
    ]

    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=20, choices=CATEGORIES)
    quantity = models.PositiveIntegerField(default=1)
    # image = models.ImageField(upload_to='products/', blank=True, null=True)
    image = models.ImageField(
        upload_to='products/',  # Folder in Cloudinary
        storage=MediaCloudinaryStorage(),  # Explicit storage (optional but recommended)
    )
    created_at = models.DateTimeField(auto_now_add=True)
    city = models.CharField(max_length=20, choices=CITY_CHOICES)

    def __str__(self):
        return f"{self.name} by {self.farmer.phone}"


#order
class ProductOrder(models.Model):
    ORDER_STATUS = [
        ('PENDING', 'Pending'),
        ('PAID', 'Paid'),
        ('SHIPPED', 'Shipped'),
        ('DELIVERED', 'Delivered'),
        ('CANCELLED', 'Cancelled'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_address = models.TextField()
    status = models.CharField(max_length=20, choices=ORDER_STATUS, default='PENDING')
    chapa_transaction_id = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} for {self.product.name}"

    def save(self, *args, **kwargs):
        self.total_price = self.product.price * self.quantity
        super().save(*args, **kwargs)
