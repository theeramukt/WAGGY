from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Product
from .serializers import ProductsSerializer, ProductsDetailSerializer
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response


class ProductView(ListCreateAPIView): # list and adding data
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
    
class ProductDetailView(RetrieveUpdateDestroyAPIView): # fetching, updating and deleting single data
    queryset = Product.objects.all()
    serializer_class = ProductsDetailSerializer

@csrf_exempt
def editProduct(request):
    data = JSONParser().parse(request)
    product = Product.objects.get(id=data['id'])
    product.title = data['title']
    product.description = data['description']
    product.category = data['category']
    product.price = data['price']
    product.save()
    return JsonResponse({"success":"order updated."}, status=200)

@csrf_exempt
def deleteProduct(request):
    data = JSONParser().parse(request)
    order = Product.objects.get(id=data['id'])
    order.delete()
    return JsonResponse({"success":"order deleted."}, status=200)