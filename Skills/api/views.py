from django.shortcuts import render
from rest_framework import viewsets
from ..models import Skills, SkillsList
from .serializers import SkillsSerializer, SkillsListSerializer

# Creating a view for the api endpoint


class SkillsView(viewsets.ReadOnlyModelViewSet):
    """ Settings it to read only as its not needed to be updated or deleted from the frontend """
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer

class SkillsListView(viewsets.ReadOnlyModelViewSet):
	queryset = SkillsList.objects.all()
	serializer_class = SkillsListSerializer
