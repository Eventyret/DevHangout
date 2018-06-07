from django.shortcuts import render
from rest_framework import viewsets
from ..models import Skills
from .serializers import SkillsSerializer

# Creating a view for the api endpoint


class SkillsView(viewsets.ReadOnlyModelViewSet):
    """ Settings it to read only as its not needed to be updated or deleted from the frontend """
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
