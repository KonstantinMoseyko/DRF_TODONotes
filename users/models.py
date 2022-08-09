from django.db import models
from django.contrib.auth.models import AbstractUser

class Users(AbstractUser):
    address = models.CharField(max_length=30, blank=True)