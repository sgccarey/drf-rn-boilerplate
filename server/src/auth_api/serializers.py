from rest_framework import serializers

from . import models


class UserProfileSerializer(serializers.ModelSerializer):
    """A serializer for our user profile object"""

    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """Create and return a new user"""

        user = models.UserProfile(
            email=validated_data['email'],
            name=validated_data['name']
        )

        # encrypt the password so it's stored as a hash
        user.set_password(validated_data['password'])

        user.save()

        return user