from rest_framework import serializers

from .models import Order, OrderItems, Checkout

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'title', 'price', 'description', 'image', 'qty']

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

class CheckoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkout
        fields = ['id', 'user', 'title', 'price', 'description', 'image', 'qty']

    def __init__(self, *args, **kwargs):
        super(CheckoutSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1