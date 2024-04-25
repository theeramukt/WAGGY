from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from user_management.models import Customer
from user_management.serializers import CustomerSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

import requests

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        try:
            new_user = User.objects.create_user(username=data['fullname'], password=data['password'])
        except:
            return JsonResponse({"error":"username already used."}, status=400)
        new_user.save()
        data['user'] = new_user.id
        customer_serializer = CustomerSerializer(data=data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data, status=201)
        new_user.delete()
        return JsonResponse({"error":"data not valid"}, status=400)
    return JsonResponse({"error":"method not allowed."}, status=405)
# Create your views here.
class CustomerView(APIView):
   permission_classes = [IsAuthenticated]
   def get(self, request, format=None):
       customer_data = Customer.objects.get(user=request.user)
       customer_serializer = CustomerSerializer(customer_data)
       content = {
           'data': customer_serializer.data
       }
       return Response(content)
   
# AI for Thai
# def IdCardOCR(request):
#     if request.method == "POST":
#         try:
#             image = request.FILES['image']
#         except:
#             return JsonResponse({"error":"image not found"}, status=400)
#         url = "https://api.aiforthai.in.th/ocr-id-front-iapp"
#         files = {'file': image}
#         headers = {
#             'Apikey': "Mn8KKR7Lkh2ZdtAorhb8SXSS5o1lEIxt",
#         }
#         response = requests.post(url, files=files, headers=headers)
#         response_json = response.json()
#         print(response_json)
#         return JsonResponse({"name": response_json.get("th_name", "")}, safe=False)
#     return JsonResponse({"error":"method not allowed."}, safe=False, status=405)
