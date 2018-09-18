from django.urls import path, include
from rest_framework import routers
from Skills.api.views import SkillsView
from Donations.api.views import DonationView
from .api import views

ROUTER = routers.DefaultRouter()
ROUTER.register("api/register", views.UserRegistrationViewSet)  # Registration URL
ROUTER.register("api/users", views.UserViewSet)  # List of all users
ROUTER.register("api/users/(?P<id>[0-9]+)/$", views.UserViewSet)  # List of Specific User

ROUTER.register("api/users/(?P<id>[0-9]+)/profile", views.ProfileView)  # Specific Users Profile
ROUTER.register("api/users/(?P<id>[0-9]+)/profile/(?P<profile_id>[0-9]+)", views.ProfileView) # Used to update and delete the profile for that specific user

ROUTER.register("api/users/(?P<id>[0-9]+)/education", views.EducationView) # List of specific
ROUTER.register("api/users/(?P<id>[0-9]+)/education/(?P<edu_id>[0-9]+)", views.EducationView) # Used to update and delete the education for a specific user

ROUTER.register("api/users/(?P<id>[0-9]+)/experience", views.ExperienceView) #List of all experience for a specific user
ROUTER.register("api/users/(?P<id>[0-9]+)/experience/(?P<exp_id>[0-9]+)", views.ExperienceView)  # Used to update and delete the experience for a specific user

ROUTER.register("api/users/(?P<id>[0-9]+)/donations", DonationView) #List of all donations for a specific user
ROUTER.register("api/users/(?P<id>[0-9]+)/donations/(?P<donation_id>[0-9]+)", DonationView) # Used to update and delete the education for a specific user

ROUTER.register("api/users/(?P<id>[0-9]+)/skills", SkillsView) #List of all skills for a specific user
ROUTER.register("api/users/(?P<id>[0-9]+)/skills/(?P<skill_id>[0-9]+)", SkillsView) # Used to update the skills for a specific user

urlpatterns = [
    path("", include(ROUTER.urls))
]
