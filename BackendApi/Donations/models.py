from django.db import models

# Create your models here.

class Donation(models.Model):
	ProfileID = models.ForeignKey("accounts.Profile", on_delete=models.CASCADE)
	amount = models.DecimalField(max_digits=5, decimal_places=2)
	date = models.DateField(, auto_now=False, auto_now_add=False)
	chargeID = models.CharField(, max_length=255)
