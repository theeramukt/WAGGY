from django.shortcuts import render
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Product
from .serializers import ProductsSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# @api_view(['GET'])
# @authentication_classes([])
# @permission_classes([])
# def products_list(request):
#         products = Product.objects.all()
#         serializer = ProductsSerializer(products, many=True)

#         return JsonResponse({
#             'data': serializer.data
#         })

# Create your views here.
# @csrf_exempt

class CustomerView(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        product_data = Product.objects.all()
        product_serializer = ProductsSerializer(product_data, many=True)
        content = {
            'data': product_serializer.data
        }
        return Response(content)
    
# def products_list(request):
#     if request.method == 'GET':
#         return get_products(request)
#     products = Product.objects.all()
#     serializer = ProductsSerializer(products, many=True)

#     return JsonResponse({
#         'data': serializer.data
#     })
