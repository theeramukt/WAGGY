from rest_framework import serializers

from product_management.models import Product
from product_management.models import Category

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'description', 'category', 'price']
    def __init__(self, *args, **kwargs):
        super(ProductsSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'description', 'category', 'price']
    def __init__(self, *args, **kwargs):
        super(ProductsDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']