from django.contrib import admin
from order_management.models import Order, OrderItems, Checkout
# Register your models here.

admin.site.register(Order)
admin.site.register(OrderItems)
admin.site.register(Checkout)