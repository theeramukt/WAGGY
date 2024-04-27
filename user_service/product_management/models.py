from django.db import models
from django.conf import settings

# from user_service import user_management

class Category(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField()
    price = models.IntegerField()
    category = models.ManyToManyField(Category, related_name='category_product') # ใช้ ManyToManyField เพราะว่าสินค้าอาจจะมีหลายประเภท
    image = models.ImageField(upload_to='uploads/properties')
    qty = models.IntegerField()

    def __str__(self):
        return self.title

# Create your models here.