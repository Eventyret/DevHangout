from django.db import models


class Skills(models.Model):
    """Skills are used for languages a developer knows and can add to their profile"""
    ID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    displayName = models.CharField(max_length=50)

    def __str__(self):
        return "Skill: " + self.displayName


class Meta:
    verbose_name_plural = "Skills"
