from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from ..models import Skill
from .serializers import SkillsSerializer

# Creating a view for the api endpoint


class SkillsView(viewsets.ModelViewSet):
    """ A list of skills each user might have """
    queryset = Skill.objects.all()
    serializer_class = SkillsSerializer

    def get_queryset(self):
        user_id = self.kwargs["id"]
        skill_id = self.kwargs.get("pk")
        if skill_id:
            return User.objects.get(id=user_id).skills.filter(id=skill_id)
        else:
            return User.objects.get(id=user_id).skills


class AllSkillsView(viewsets.ReadOnlyModelViewSet):
    """ A list of all skills available from the database, this is set to read only for now """
    queryset = Skill.objects.all()
    serializer_class = SkillsSerializer
