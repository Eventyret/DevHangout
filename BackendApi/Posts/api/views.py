from django.shortcuts import render
from rest_framework import viewsets
from ..models import Posts
from .serializers import PostSerializer

class PostsView(viewsets.ModelViewSet):
    """ Settings it to read only as its not needed to be updated or deleted from the frontend """
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
