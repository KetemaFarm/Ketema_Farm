from django.urls import path
from .views import RegisterAPI, LoginAPI, LogoutAPI, ProfileAPI

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    # path('verify-otp/', VerifyOTPAPI.as_view(), name='verify-otp'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', LogoutAPI.as_view(), name='logout'),

    path('profile/', ProfileAPI.as_view(), name='current-profile'),  # Current user's profile
    path('profile/<int:id>/', ProfileAPI.as_view(), name='profile-detail'),#detail
]