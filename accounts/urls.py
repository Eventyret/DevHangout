from django.urls import path, include
from rest_framework import routers
from .api import views

ROUTER = routers.DefaultRouter()
ROUTER.register("api/profile", views.ProfileView)
ROUTER.register("api/profile/(?P<id>[0-9])/$", views.ProfileView)
ROUTER.register("api/users", views.UserViewSet)

urlpatterns = [
    path("", include(ROUTER.urls))
]
