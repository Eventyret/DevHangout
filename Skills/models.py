from django.db import models


class Skills(models.Model):
	"""Skills are used for languages a developer knows and can add to their profile"""
	name = models.CharField(max_length=50)
	displayName = models.CharField(max_length=50)
	icon = models.CharField(max_length=100, blank=True)
	profileID = models.ForeignKey("accounts.Profile", on_delete=models.CASCADE)

	class Meta:
		verbose_name_plural = "Skills"

	def __str__(self):
		return self.DisplayName


class SkillList(models.Model):
	"""List of skills that a developer can pick from"""
	name = models.CharField(max_length=50)
	displayName = models.CharField(max_length=50)
	icon = models.CharField(max_length=100, blank=True)

	class Meta:
		verbose_name_plural = "Skill List"

	def __str__(self):
		return self.DisplayName
