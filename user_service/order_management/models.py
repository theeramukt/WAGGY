from typing import Any
from django.db import models
from user_management.models import Customer
from product_management.models import Product
from django.contrib.auth.models import User

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(Customer, null=True, on_delete=models.CASCADE)

class OrderItems(models.Model):
    order = models.ForeignKey(Order, null=True, on_delete=models.SET_NULL, related_name='order_items')
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    qty = models.IntegerField()

    def __str__(self):
        return self.product.title
    