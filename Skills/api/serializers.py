from rest_framework import serializers
from ..models import Skills


class SkillsSerializer(serializers.ModelSerializer):
    """ A Serializer that will have read only access but using the modal one """
    class Meta:
        model = Skills
        fields = ("id", "name", "icon")
