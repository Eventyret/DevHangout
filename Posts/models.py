from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Posts(models.Model):
	""" Posts that users can make holding the fields for their database"""
	ID = models.AutoField(primary_key=True)
	content = models.TextField(null=True, Blank=True)
	date = models.DateField(, auto_now=False, auto_now_add=False)
