from django.db import models


class Skills(models.Model):
    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    DisplayName = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Skills"
