from django.contrib.auth.models import User
from rest_framework import serializers
from Skills.api.serializers import SkillsSerializer
from Donations.api.serializers import DonationSerializer
from ..models import Profile, Education, Experience


class ProfileSerializer(serializers.ModelSerializer):
    """The fields for a users profile"""
    class Meta:
        model = Profile
        fields = ("id", "user", "firstName", "lastName", "avatar",
                  "location", "website", "company", "title", "backgroundImage", "bio",
                  "twitter", "facebook", "linkedin", "instagram", "youtube", "github", "donator")


class EducationSerializer(serializers.ModelSerializer):
    """The fields for a users education"""
    class Meta:
        model = Education
        fields = ("id", "user", "school", "qualification",
                  "fieldOfStudy", "dateFrom", "dateTo", "current")


class ExperienceSerializer(serializers.ModelSerializer):
    """The fields for a users Experience"""
    class Meta:
        model = Experience
        fields = ("id", "user", "jobTitle", "company",
                  "location", "dateFrom", "dateTo", "current")


class UserSerializer(serializers.ModelSerializer):
    """The User itself, holding all the other serializers
    For security reasons we are keeping password and email write only fields.
    At a later date I will implement password recovery and email recovery.
    But for now this is read only.
    """
    profile = ProfileSerializer(source="profile_user", many=True)
    skills = SkillsSerializer(source="skill", many=True)
    education = EducationSerializer(source="edu_user", many=True)
    donation = DonationSerializer(source="donation_user", many=True)
    experience = ExperienceSerializer(source="exp_user", many=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "password",
                  "profile", "education", "experience", "skills", "donation")
        write_only_fields = ('password', "email",)
        read_only_fields = ('id',)
        extra_kwargs = {
            "password": {
                "write_only": True,
                "required": True
            },
            "email": {
                "write_only": True
            }}


class UserRegistrationSerializer(serializers.ModelSerializer):
    """This is used for registration as we don't need all other fields.
    For security reasons we are keeping password and email write only fields."""

    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        write_only_fields = ("password",)
        read_only_fields = ("id", )
        extra_kwargs = {
            "password": {
                "write_only": True,
                "required": True
            },
            "email": {
                "write_only": True
            }
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
