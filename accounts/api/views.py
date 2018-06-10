from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from ..models import Profile
from .serializers import ProfileSerializer, UserSerializer

# Creating a view for the api endpoint


class ProfileView(viewsets.ModelViewSet):
	queryset = Profile.objects.all()
	serializer_class = ProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
