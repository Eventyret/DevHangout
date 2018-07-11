from django.urls import path, include
from rest_framework import routers
from .api import views

ROUTER = routers.DefaultRouter()
ROUTER.register("api/register", views.UserRegistrationViewSet) # Registration URL
ROUTER.register("api/users", views.UserViewSet) # List of all users
ROUTER.register("api/users/(?P<id>[0-9])/$", views.ProfileView) # List of Specific User
ROUTER.register("api/users/(?P<id>[0-9])/education", views.EducationView)
ROUTER.register("api/users/(?P<id>[0-9])/experience", views.ExperienceView)

urlpatterns = [
    path("", include(ROUTER.urls))
]
