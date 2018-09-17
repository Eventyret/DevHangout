from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from .permissions import IsOwner
from ..models import Profile, Education, Experience
from .serializers import ProfileSerializer, UserSerializer, EducationSerializer, ExperienceSerializer, UserRegistrationSerializer


# Creating a view for the api endpoint


class ProfileView(viewsets.ModelViewSet):
    
    permission_classes = (IsOwner, )
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user_id = self.kwargs["id"]
        profile_id = self.kwargs.get("pk")
        if profile_id:
            return User.objects.get(id=user_id).profile_user.filter(id=profile_id)
        else:
            return User.objects.get(id=user_id).profile


class EducationView(viewsets.ModelViewSet):
    permission_classes = (IsOwner, )
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def get_queryset(self):
        user_id = self.kwargs["id"]
        edu_id = self.kwargs.get("pk")
        if edu_id:
            return User.objects.get(id=user_id).edu_user.filter(id=edu_id)
        else:
            return User.objects.get(id=user_id).edu_user


class ExperienceView(viewsets.ModelViewSet):
    permission_classes = (IsOwner, )
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        user_id = self.kwargs["id"]
        exp_id = self.kwargs.get("pk")
        if exp_id:
            return User.objects.get(id=user_id).exp_user.filter(id=exp_id)
        else:
            return User.objects.get(id=user_id).exp_user


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRegistrationViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
