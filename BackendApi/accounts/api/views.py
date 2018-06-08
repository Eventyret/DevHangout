from django.shortcuts import render
from rest_framework import viewsets
from ..models import Profile
from .serializers import ProfileSerializer

# Creating a view for the api endpoint


class ProfileView(viewsets.ModelViewSet):
	queryset = Profile.objects.all()
	serializer_class = ProfileSerializer
