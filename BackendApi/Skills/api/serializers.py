from rest_framework import serializers
from ..models import Skill


class SkillsSerializer(serializers.ModelSerializer):
    """ A Serializer that will have read only access but using the modal one """
    class Meta:
        model = Skill
        fields = ("user", "skillID", "name", "icon", "owned")
