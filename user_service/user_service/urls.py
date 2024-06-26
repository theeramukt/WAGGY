"""
URL configuration for user_service project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from user_management.views import *
from product_management.views import *
from order_management.views import *
from rest_framework_simplejwt.views import (
   TokenObtainPairView,
   TokenRefreshView,
)
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/address', CustomerAddressViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # register
    path('api/register', register),
    path('api/idCard', IdCardOCR),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/myinfo', CustomerView.as_view(), name="myinfo"),
    path('api/customers', CustomerView.as_view(), name='customer'),
    path('api/customer/<int:pk>', CustomerDetailView.as_view(), name='single_customer'),
    path('api/products', ProductView.as_view(), name='product'),
    path('api/product/<int:pk>', ProductDetailView.as_view(), name='single_product'),
    path('api/orders', OrderView.as_view(), name='order'),
    path('api/order/<int:pk>', OrderDetailView.as_view(), name='order'),
    # path('api/addAddress', addAddress),
    path('api/addCart', addCart),
    path('api/deleteCart', deleteCart),
    path('api/clearCart', clearCart),
    path('api/updateQty', updateQty),
    # checkout
    path('api/checkout', CheckoutView.as_view(), name="checkout"),
    path('api/addCheckout', addCheckout),
    path('api/deleteCheckout', deleteCheckout),
    path('api/editProduct', editProduct),
    path('api/deleteProduct', deleteProduct),
]

urlpatterns += router.urls
