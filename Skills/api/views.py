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
    serializer = SkillsSerializer(queryset, many=True)

    def get_queryset(self):
        user_id = self.kwargs["id"]
        skillPK = self.kwargs.get("pk")
        if skillPK:
            return User.objects.get(id=user_id).skill_id.filter(id=skillPK)
        else:
            return User.objects.get(id=user_id).skill_id
