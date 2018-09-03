from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from Skills.models import Skill


class Profile(models.Model):

    user = models.ForeignKey(
        User, related_name="profile", on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50, blank=True, null=True)
    lastName = models.CharField(max_length=50, blank=True, null=True)
    avatar = models.ImageField(
        upload_to="avatars", max_length=None, blank=True, null=True)
    location = models.CharField(max_length=50, blank=True, null=True)
    website = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=50, blank=True, null=True)
    backgroundImage = models.ImageField(
        upload_to="media/backgrounds", max_length=None, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    twitter = models.CharField(max_length=100, blank=True, null=True)
    facebook = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.CharField(max_length=100, blank=True, null=True)
    instagram = models.CharField(max_length=100, blank=True, null=True)
    youtube = models.CharField(max_length=100, blank=True, null=True)
    github = models.CharField(max_length=50, blank=True, null=True)
    donator = models.BooleanField(default=False)
    testimonal = models.TextField(blank=True, null=True)

    # Create your models here.

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

    class Meta:
        verbose_name_plural = "Profile Information"

    def __str__(self):
        return self.user.username


class Education(models.Model):
    user = models.ForeignKey(
        User, related_name="edu_user", on_delete=models.CASCADE)
    school = models.CharField(max_length=50)
    qualification = models.CharField(max_length=50)
    fieldOfStudy = models.CharField(max_length=50)
    dateFrom = models.DateField(auto_now=False, auto_now_add=False)
    dateTo = models.DateField(auto_now=False, auto_now_add=False, null=True)
    current = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Education"

    def __str__(self):
        return self.school


class Experience(models.Model):
    user = models.ForeignKey(
        User, related_name="exp_user", on_delete=models.CASCADE)
    jobTitle = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    dateFrom = models.DateField(auto_now=False, auto_now_add=False)
    dateTo = models.DateField(
        auto_now=False, auto_now_add=False, null=True, blank=True)
    current = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Experience"

    def __str__(self):
        return self.company
