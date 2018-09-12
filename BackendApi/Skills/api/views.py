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
    serializer = SkillsSerializer(many=True)

    def get_queryset(self):
        user_id = self.kwargs["id"]
        skill_pk = self.kwargs.get("pk")
        if skill_pk:
            return User.objects.get(id=user_id).skill.filter(id=skill_pk)
        else:
            return User.objects.get(id=user_id).skill
