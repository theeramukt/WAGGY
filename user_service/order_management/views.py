from django.shortcuts import render

from order_management.models import Order, OrderItems
from order_management.serializers import OrdersSerializer, OrdersDetailSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView
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
    
