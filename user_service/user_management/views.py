from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from user_management.models import Customer, CustomerAddress, Admin
from user_management.serializers import CustomerSerializer, CustomerDetailSerializer, CustomerAddressSerializer, AdminSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, ListAPIView

import requests

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        try:
            new_user = User.objects.create_user(username=data['email'], password=data['password'])
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

class CustomerView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        customer_data = Customer.objects.get(user=request.user)
        customer_serializer = CustomerSerializer(customer_data)
        content = {
           'data': customer_serializer.data
        }
        return Response(content)
# Admin
class AdminView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

# Customer
class CustomerView(ListCreateAPIView):
#    permission_classes = [IsAuthenticated]
   queryset = Customer.objects.all()
   serializer_class = CustomerSerializer
#    def get(self, request, format=None):
#        customer_data = Customer.objects.get(email=request.user)
#        customer_serializer = CustomerSerializer(customer_data)
#        content = {
#            'data': customer_serializer.data
#        }
#        return Response(content)
    
class CustomerDetailView(RetrieveUpdateDestroyAPIView): # fetching, updating and deleting single data
    # permission_classes = [IsAuthenticated]
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer

class CustomerAddressViewSet(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = CustomerAddress.objects.all()
    serializer_class = CustomerAddressSerializer

@csrf_exempt
def addAddress(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        address_serializer = CustomerAddressSerializer(data=data)
        if address_serializer.is_valid():
            address_serializer.save()
            return JsonResponse(address_serializer.data, status=201)
        return JsonResponse({"error":"data not valid"}, status=400)
    
# AI for Thai
@csrf_exempt
def IdCardOCR(request):
    if request.method == "POST":
        try:
            # ตรวจสอบว่ามีไฟล์ที่ถูกส่งมาหรือไม่
            if "file" not in request.FILES:
                return JsonResponse({"error": "Image file not found"}, status=400)

            image_file = request.FILES["file"]  # รับไฟล์ภาพจาก request.FILES

            # ตรวจสอบประเภทของไฟล์ภาพ
            if not image_file.content_type.startswith("image"):
                return JsonResponse({"error": "Invalid image file type"}, status=400)

            # ตรวจสอบขนาดของไฟล์ภาพ
            MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
            if image_file.size > MAX_IMAGE_SIZE:
                return JsonResponse({"error": "Image file size too large"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
        
        url = "https://api.aiforthai.in.th/ocr-id-front-iapp"
        files = {"file": image_file}  # ใช้ไฟล์ภาพที่รับมาจากผู้ใช้
        headers = {
            "Apikey": "aB7JgAPtaUAdbO4LUg5MhJ8hXja7kDhH",
        }

        response = requests.post(url, files=files, headers=headers)
        if response.status_code == 200:
            response_json = response.json()
            # นำ JSON ที่ได้จาก API มาแสดงในฟอร์มลงทะเบียน
            return JsonResponse(response_json, status=200)
        else:
            return JsonResponse({"error": "Failed to process image"}, status=500)

    return JsonResponse({"error": "Method not allowed!"}, status=403)


# (request):
#     if request.method == "POST":
#         try:
#             image = request.FILES['file']
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
