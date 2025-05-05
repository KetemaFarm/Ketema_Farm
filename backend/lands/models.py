from django.db import models
from users.models import User
from cloudinary_storage.storage import MediaCloudinaryStorage

class Land(models.Model):
    # Shared with products
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
    
    # New: Land categories matching product categories
    CATEGORIES = [
        ('BALCONY', 'Balcony'),
        ('ROOF_TOP', 'Roof Top'),
        ('GARDEN', 'Garden'),
        ('UNUSED_PLOT', 'Unused Plot'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    city = models.CharField(max_length=20, choices=CITY_CHOICES)
    category = models.CharField(max_length=20, choices=CATEGORIES)  
    size = models.CharField(max_length=50)  # e.g., "1000 sq ft"
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(
        upload_to='land_images/',
        storage=MediaCloudinaryStorage(),  # Consistent with products
        blank=True,
        null=True
    )
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.get_category_display()}) in {self.get_city_display()}"

class LandBooking(models.Model):
    land = models.ForeignKey(Land, on_delete=models.CASCADE)
    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_confirmed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']  # Newest bookings first

    def __str__(self):
        status = "Confirmed" if self.is_confirmed else "Pending"
        return f"Booking #{self.id} - {status} for {self.land.title[:20]}..."
