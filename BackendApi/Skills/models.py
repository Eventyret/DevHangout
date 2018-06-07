from django.db import models


class Skills(models.Model):
    """Skills are used for languages a developer knows and can add to their profile"""
    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    DisplayName = models.CharField(max_length=50)

    class Meta:
    	verbose_name_plural = "Skills"

    def __str__(self):
        return "Skill: " + self.DisplayName
