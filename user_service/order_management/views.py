from django.shortcuts import render

from order_management.models import Order, OrderItems, Checkout
from order_management.serializers import OrdersSerializer, OrdersDetailSerializer, CheckoutSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.

class OrderView(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    # def get(self, request, format=None):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer
        # content = {
        #     'data': order_serializer.data,
        # }
        # return Response(content)
    
class OrderDetailView(ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = OrdersDetailSerializer
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = Order.objects.get(id=order_id)
        order_items = OrderItems.objects.filter(order=order)
        return order_items
    # def get(self, request, format=None):
        # content = {
        #     'data': order_serializer.data,
        # }
        # return Response(content)

# Cart
@csrf_exempt
def addCart(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        order_serializer = OrdersSerializer(data=data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse(order_serializer.data, status=201)
        return JsonResponse({"error":"data not valid"}, status=400)

@csrf_exempt
def deleteCart(request):
    data = JSONParser().parse(request)
    order = Order.objects.get(id=data['id'])
    order.delete()
    return JsonResponse({"success":"order deleted."}, status=200)

@csrf_exempt
def updateQty(request):
    data = JSONParser().parse(request)
    order = Order.objects.get(id=data['id'])
    order.qty = data['qty']
    order.save()
    return JsonResponse({"success":"order updated."}, status=200)

@csrf_exempt
def clearCart(request):
    data = JSONParser().parse(request)
    order = Order.objects.all()
    order.delete()
    return JsonResponse({"success":"order deleted."}, status=200)

# Checkout
class CheckoutView(ListCreateAPIView):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer

@csrf_exempt
def addCheckout(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        checkout_serializer = CheckoutSerializer(data=data)
        if checkout_serializer.is_valid():
            checkout_serializer.save()
            return JsonResponse(checkout_serializer.data, status=201)
        return JsonResponse({"error":"data not valid"}, status=400)
    
@csrf_exempt
def deleteCheckout(request):
    data = JSONParser().parse(request)
    order = Checkout.objects.get(id=data['id'])
    order.delete()
    return JsonResponse({"success":"order deleted."}, status=200)