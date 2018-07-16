from rest_framework import serializers
from ..models import Skills, SkillsList


class SkillsSerializer(serializers.ModelSerializer):
    """ A Serializer that will have read only access but using the modal one """
    class Meta:
        model = Skills
        fields = ("__all__")

class SkillsListSerializer(serializers.ModelSerializer):

	class Meta:
		model = SkillsList
		fields = ("__all__")
