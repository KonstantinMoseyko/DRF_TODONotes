"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter

from todoapp.views import ProjectModelViewSet, TodoModelViewSet
from users.views import UserModelLimitedViewSet

schema_view = get_schema_view(
    openapi.Info(
        title="TodoApp",
        default_version="1.0",
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
    ),
)

router = DefaultRouter()
# router.register("users", UserModelViewSet)
router.register("users", UserModelLimitedViewSet)
router.register("project", ProjectModelViewSet)
router.register("todo", TodoModelViewSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls")),
    path("api-token-auth/", views.obtain_auth_token),
    path("swagger", schema_view.with_ui()),
    re_path(r"swagger(?P<format>\.json|\.yaml)", schema_view.without_ui()),
]
