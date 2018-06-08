from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50, blank=True, null=True)
    lastName = models.CharField(max_length=50, blank=True, null=True)
    avatar = models.ImageField(upload_to="uploads/avatars", max_length=None, blank=True, null=True)
    email = models.EmailField(max_length=254)
    location = models.CharField(max_length=50, blank=True, null=True)
    website = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=50, blank=True, null=True)
    backgroundImage = models.ImageField(upload_to="uploads/backgrounds", max_length=None, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    twitter = models.CharField(max_length=100, blank=True, null=True)
    facebook = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.CharField(max_length=100, blank=True, null=True)
    instagram = models.CharField(max_length=100, blank=True, null=True)
    youtube = models.CharField(max_length=100, blank=True, null=True)
    github = models.CharField(max_length=50, blank=True, null=True)
    donator = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.user.username
