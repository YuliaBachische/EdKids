from django.contrib.auth.models import AbstractUser
from django.db import models


class User(models.Model):
    chat_id = models.CharField(max_length=255, unique=True)
    username = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.username or self.chat_id

