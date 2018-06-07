from django.urls import path, include
from .api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("api/skills", views.SkillsView)

urlpatterns = [
	path("", include(router.urls))
]
