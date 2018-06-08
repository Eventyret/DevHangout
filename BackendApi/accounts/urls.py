from django.urls import path, include
from rest_framework import routers
from .api import views

ROUTER = routers.DefaultRouter()
ROUTER.register("api/profile", views.ProfileView)

urlpatterns = [
    path("", include(ROUTER.urls))
]
