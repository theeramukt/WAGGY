
from django.contrib import admin
from user_management.models import Customer, Admin, CustomerAddress
# Register your models here.
admin.site.register(Admin)
admin.site.register(Customer)
admin.site.register(CustomerAddress)