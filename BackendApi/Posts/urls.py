from django.urls import path, include
from rest_framework import routers
from .api import views

router = routers.DefaultRouter()
router.register("api/posts", views.PostsView)
router.register("api/comments", views.PostsView)

urlpatterns = [
    path("", include(router.urls))
]
