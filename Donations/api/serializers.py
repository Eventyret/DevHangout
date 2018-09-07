from rest_framework import serializers
from ..models import Donation


class DonationSerializer(serializers.ModelSerializer):
    """ A Serializer that will have read only access but using the modal one """
    class Meta:
        model = Donation
        fields = ("id", "user", "amount", "date",  "token", "ip"),
        write_only_fields = ("ip,")
