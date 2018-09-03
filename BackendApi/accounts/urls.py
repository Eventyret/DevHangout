from django.urls import path, include
from rest_framework import routers
from Skills.api.views import SkillsView
from .api import views

ROUTER = routers.DefaultRouter()
ROUTER.register("api/register", views.UserRegistrationViewSet)  # Registration URL
ROUTER.register("api/users", views.UserViewSet)  # List of all users
ROUTER.register("api/users/(?P<id>[0-9]+)/$", views.UserViewSet)  # List of Specific User
ROUTER.register("api/users/(?P<id>[0-9]+)/profile", views.ProfileView)  # List of Specific User
ROUTER.register("api/users/(?P<id>[0-9]+)/profile/(?P<profile_id>[0-9]+)", views.ProfileView)
ROUTER.register("api/users/(?P<id>[0-9]+)/education", views.EducationView)
ROUTER.register("api/users/(?P<id>[0-9]+)/education/(?P<edu_id>[0-9]+)", views.EducationView)
ROUTER.register("api/users/(?P<id>[0-9]+)/experience", views.ExperienceView)
ROUTER.register("api/users/(?P<id>[0-9]+)/experience/(?P<exp_id>[0-9]+)", views.ExperienceView)
ROUTER.register("api/users/(?P<id>[0-9]+)/skills", SkillsView)

urlpatterns = [
    path("", include(ROUTER.urls))
]
