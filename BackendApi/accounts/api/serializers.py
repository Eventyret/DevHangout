from django.contrib.auth.models import User
from rest_framework import serializers
from Skills.api.serializers import SkillsSerializer
from ..models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    """A Serializer to use CRUD on a user profile"""
    class Meta:
        model = Profile
        fields = ("firstName", "lastName", "avatar", "location", "website", "company", "title",
                  "backgroundImage", "bio", "twitter", "facebook", "linkedin", "instagram", "youtube", "github", "donator")

class UserSerializer(serializers.ModelSerializer):
	profile = ProfileSerializer()
	#skills = SkillsSerializer(many =True)
	class Meta:
		model = User
		fields = ("id", "username", "email", "password", "profile")
		write_only_fields = ('password',)
		read_only_fields = ('id',)
		extra_kwargs = {
				"password": {
					"write_only": True,
					"required": True
				}}



	def create(self, validated_data):
		user = User.objects.create(
			username=validated_data['username'],
			email=validated_data['email']
		)

		user.set_password(validated_data['password'])
		user.save()

		return user
