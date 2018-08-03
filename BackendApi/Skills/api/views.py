from django.shortcuts import render
from rest_framework import viewsets
from ..models import Skill
from .serializers import SkillsSerializer

# Creating a view for the api endpoint


class SkillsView(viewsets.ModelViewSet):
    """ Settings it to read only as its not needed to be updated or deleted from the frontend """
    queryset = Skill.objects.all()
    serializer_class = SkillsSerializer

	def def get_queryset(self):
		user_id = self.kwargs["id"]
