from rest_framework import serializers
from ..models import Donation


class DonationSerializer(serializers.ModelSerializer):
    """This shows one single donation from a user"""
    class Meta:
        model = Donation
        fields = ("id", "user", "amount", "date", "token", "ip")
        write_only_fields = ("ip,")
