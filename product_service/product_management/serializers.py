from rest_framework import serializers

from .models import Product

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        field = ['title', 'price', 'description', 'image']
        fields = '__all__'