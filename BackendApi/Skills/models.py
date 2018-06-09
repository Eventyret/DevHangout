from django.db import models


class Skills(models.Model):
	"""Skills are used for languages a developer knows and can add to their profile"""
	name = models.CharField(max_length=50)
	displayName = models.CharField(max_length=50)
	profileID = models.ForeignKey("accounts.Profile", on_delete=models.CASCADE)

	class Meta:
		verbose_name_plural = "Skills"

	def __str__(self):
		return "Skill: " + self.DisplayName
