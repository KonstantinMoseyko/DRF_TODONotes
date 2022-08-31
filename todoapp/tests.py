from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase, force_authenticate

from .models import Project
from .views import ProjectModelViewSet


class ProjectTestCase(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get("/api/project/")
        view = ProjectModelViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_list_1(self):
        factory = APIRequestFactory()
        request = factory.get("/api/project/")
        force_authenticate(request, user=self.user)
        view = ProjectModelViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)


class ProjectClientTestCase(APITestCase):
    def test_get_list(self):
        response = self.client.get("/api/project/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_list_1(self):
        response = self.client.get("/api/project/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_list_2(self):
        self.client.login(username="admin", password="123")
        # self.client.force_login(user=self.user)
        response = self.client.get("/api/project/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.client.logout()
        response = self.client.get("/api/project/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_post(self):
        self.client.login(username="admin", password="123")
        # self.client.force_login(user=self.user)
        response = self.client.post(
            "/api/project/", {"project_name": "Battery", "github_url": "https://github.com/Bat/", "users_involved": 4}
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        project = Project.objects.get(pk=response.data.get("id"))
        self.assertEqual(project.project_name, "Battery")
