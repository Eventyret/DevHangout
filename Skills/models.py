from django.db import models
from accounts.models import Profile


class Skills(models.Model):
	"""List of skills that a developer can pick from"""
	name = models.CharField(max_length=50, blank=True)
	icon = models.CharField(max_length=100, blank=True)

	class Meta:
		verbose_name_plural = "Skill List"

	def __str__(self):
		return self.name

class SkillsList(models.Model):
	profileID = models.OneToOneField(Profile, related_name="profile_skills", on_delete=models.CASCADE, null=True)
	listofSkills = models.TextField(max_length=10000, blank=True)
#class Skills(models.Model):
	#"""Skills are used for languages a developer knows and can add #to their profile"""
	#profileID = models.ForeignKey("accounts.Profile", on_delete=models.CASCADE)
	#skillsID = models.ManyToManyField(SkillsList)

	#class Meta:
	#	verbose_name_plural = "Skills"
