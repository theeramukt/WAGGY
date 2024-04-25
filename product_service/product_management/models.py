from django.db import models
from django.conf import settings

# from user_service import user_management

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField()
    price = models.IntegerField()
    category = models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/properties')
    amount = models.IntegerField()
# Create your models here.
