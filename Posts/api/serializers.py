from rest_framework import serializers
from ..models import Posts

class PostSerializer(serializers.ModelSerializer):
    """ A Serializer that will have read only access but using the modal one """
    class Meta:
        model = Posts
        fields = ("ID", "Name", "DisplayName")
