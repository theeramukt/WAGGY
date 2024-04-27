from rest_framework import serializers

from .models import Order, OrderItems

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user']

    def __init__(self, *args, **kwargs):
        super(OrdersSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrdersDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['id', 'order', 'product', 'qty']

    def __init__(self, *args, **kwargs):
        super(OrdersDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1