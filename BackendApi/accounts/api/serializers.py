from rest_framework import serializers
from ..models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    """A Serializer to use CRUD on a user profile"""
    class Meta:
        model = Profile
        fields = ("user", "email", "firstName", "lastName", "avatar", "location", "website", "company", "backgroundImage", "bio", "twitter", "facebook", "linkedin", "instagram", "youtube", "github", "donator")
