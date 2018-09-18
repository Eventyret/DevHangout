from rest_framework import serializers
from ..models import Skill


class SkillsSerializer(serializers.ModelSerializer):
    """A list of skills the user has picked"""
    class Meta:
        model = Skill
        fields = ("user", "id", "skillID", "name", "icon", "owned")
