from rest_framework import serializers
from django.contrib.auth import password_validation

from . import models


class UserProfileSerializer(serializers.ModelSerializer):
    """
    A serializer for our user profile object
    """
    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value

    def create(self, validated_data):
        """
        Create and return a new user
        """
        user = models.UserProfile(
            email=validated_data['email'],
            username=validated_data['username']
        )

        # encrypt the password and store as a hash
        user.set_password(validated_data['password'])
        user.save()
        return user
