from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.

def addToCart(request):
    cart_product = {}
    cart_product[str(request.GET['id'])] = {
        'title': request.GET['title'],
        'image': request.GET['image'],
        'qty': request.GET['qty'],
        'price': request.GET['price']
    }

    if 'cart_data_obj' in request.session:
        if str(request.GET['id']) in request.session['cart_data_obj']:
            cart_data = request.session['cart_data_obj']
            cart_data[str(request.GET['id'])]['qty'] = int(cart_product[str(request.GET['id'])]['qty'])
            cart_data.update(cart_product)
            request.session['cart_data_obj'] = cart_data
        else:
            cart_data = request.session['cart_data_obj']
            cart_data.update(cart_product)
            request.session['cart_data_obj'] = cart_data
    else:
        request.session['cart_data_obj'] = cart_product
    return JsonResponse({'data': request.session['cart_data_obj']})
    # return JsonResponse({'data': request.session['cart_data_obj'], 'totalCartItems': len(request.session['cart_data_obj'])})