from django.db import models
from django.contrib.auth.models import User, AbstractUser


# Admin
class Admin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

# Customer
class Customer(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.fullname # ทำให้ตารางของเรามีชื่อแทนที่จะเป็น object ในการแสดงผล

class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_addresses')
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)

    def __str__(self):
        return self.address
