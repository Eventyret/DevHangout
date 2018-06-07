from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    avatar = models.ImageField(upload_to="uploads/avatars", max_length=None)
    email = models.EmailField(max_length=254)
    location = models.CharField(max_length=50)
    website = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    backgroundImage = models.ImageField(upload_to="uploads/backgrounds", max_length=None)
    bio = models.TextField()
    twitterURL = models.CharField(max_length=100)
    facebookURL = models.CharField(max_length=100)
    linkedinURL = models.CharField(max_length=100)
    instagramURL = models.CharField(max_length=100)
    youtubeURL = models.CharField(max_length=100)
    githubUserName = models.CharField(max_length=50)
    donator = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.user
