from django.db import models
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField()
    price = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null = True, related_name='category_product')

    def __str__(self):
        return self.title

# Create your models here.