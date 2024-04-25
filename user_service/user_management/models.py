from django.db import models
from django.contrib.auth.models import User, AbstractUser

# Create your models here.
class Customer(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255, blank=True)
    email = models.EmailField(unique=True)

# from django.conf import settings
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager

# class CustomUserManager(UserManager):
#     def _create_user(self, name, email, password, **extra_fields):
#         if not email:
#             raise ValueError("You have not sepecified a valid e-mail address")
        
#         email = self.normalize_email(email)
#         user = self.model(email=email, name=name, **extra_fields)
#         user.set_password(password)
#         user.save(using=self.db)

#         return user
    
#     def create_user(self, name=None, email=None, password=None, **extra_fields):
#         extra_fields.setdefault('is_admin', False)
#         return self._create_user(name, email, password, **extra_fields)
    
#     def create_admin(self, name=None, email=None, password=None, **extra_fields):
#         extra_fields.setdefault('is_admin', True)
#         return self._create_user(name, email, password, **extra_fields)
    
# class User(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(unique=True)
#     name = models.CharField(max_length=255, blank=True, null=True)

#     is_active = models.BooleanField(default=True)
#     is_admin = models.BooleanField(default=False)

#     objects = CustomUserManager()

#     USERNAME_FIELD = 'email'
#     EMAIL_FIELD = 'email'
