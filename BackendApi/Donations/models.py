from django.db import models
from django.contrib.auth.models import User


class Donation(models.Model):
    """A Donation from a user is recorded in this model
    it will take the user the amount and date"""
    user = models.ForeignKey(User, related_name="donation_user", on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    date = models.BigIntegerField()
    token = models.CharField(max_length=255, blank=True, null=True)
    ip = models.GenericIPAddressField(protocol="both", blank=True, null=True)
