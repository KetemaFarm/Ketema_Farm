from django.urls import path
from .views import LandListView, LandDetailView, LandBookingView

urlpatterns = [
    path('', LandListView.as_view(), name='land-list'),
    path('<int:pk>/', LandDetailView.as_view(), name='land-detail'),
    path('<int:id>/book/', LandBookingView.as_view(), name='land-booking'),
]