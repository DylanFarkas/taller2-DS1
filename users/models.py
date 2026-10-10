from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Role(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class User(AbstractUser):
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    email = models.EmailField(unique=True)
    identification = models.CharField(max_length=10, unique=True)
    phone = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.username