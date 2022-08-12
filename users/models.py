from django.contrib.auth.models import AbstractUser
from django.db import models


class Users(AbstractUser):
    address = models.CharField(max_length=30, blank=True)
