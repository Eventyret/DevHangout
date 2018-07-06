from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from ..models import Profile
from .serializers import ProfileSerializer, UserSerializer


# Creating a view for the api endpoint


class ProfileView(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticatedOrReadOnly, )
	queryset = Profile.objects.all()
	serializer_class = ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
