from django.contrib import admin
# from user_service.user_management.models import Customer
from product_management.models import Product, Category

admin.site.register(Product)
admin.site.register(Category)