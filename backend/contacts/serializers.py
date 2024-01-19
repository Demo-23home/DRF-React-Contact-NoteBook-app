from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source="created_by.username")
    updated_by = serializers.ReadOnlyField(source="updated_by.username")

    class Meta:
        model = Contact
        fields = "__all__"