from rest_framework.viewsets import ModelViewSet

from .models import Users
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = Users.objects.all()
