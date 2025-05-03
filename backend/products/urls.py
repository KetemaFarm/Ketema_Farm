from django.urls import path
from .views import ProductListCreateView, ProductDetailView, ProductOrderView, PaymentCallbackView
urlpatterns = [
    path('', ProductListCreateView.as_view(), name='product-list'),
    path('<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    # path('<int:pk>/order/', ProductOrderView.as_view(), name='product-order'),
    # path('<int:pk>/payment-callback/', PaymentCallbackView.as_view(), name='payment-callback'),
]

#chapa payment itegration will be modified