from django.contrib.auth.models import User
from rest_framework import serializers
from ..models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    """A Serializer to use CRUD on a user profile"""
    class Meta:
        model = Profile
        fields = ("user", "firstName", "lastName", "avatar", "location", "website", "company",
                  "backgroundImage", "bio", "twitter", "facebook", "linkedin", "instagram", "youtube", "github", "donator")


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        extra_kwargs = {
			"password": {
				"write_only": True,
				"required": True
				}}

        def create(self, validate_date):
            User = User.objects.create_user(**validated_data)
            return User
