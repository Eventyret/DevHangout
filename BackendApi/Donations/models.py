from django.db import models
from django.contrib.auth.models import User

class Donation(models.Model):
    user = models.ForeignKey(User, related_name="donation_user", on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    date = models.DateField(auto_now=False, auto_now_add=False)
    chargeID = models.CharField(max_length=255)
