from django.db import models
from django.contrib.auth.models import User


class Skill(models.Model):
    """This is the model for one skill.
    A user can have multiple skills hence why we are using ForeignKey to the user."""
    user = models.ForeignKey(User, related_name="skill", on_delete=models.CASCADE)
    skillID = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True)
    icon = models.CharField(max_length=100, blank=True)
    owned = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Skills"

    def __str__(self):
        return self.name
