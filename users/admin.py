from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from users import models


@admin.register(models.Users)
class CustomUserAdmin(UserAdmin):
    pass
