from django.db import models
from django.contrib.auth.models import User


class Skill(models.Model):
	"""List of skills that a developer can pick from"""
	user = models.ManyToManyField(User, related_name="skills", blank=True)
	name = models.CharField(max_length=50, blank=True)
	icon = models.CharField(max_length=100, blank=True)

	class Meta:
		verbose_name_plural = "Skills"

	def __str__(self):
		return self.name
