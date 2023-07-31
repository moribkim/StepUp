from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import User
from mission.models import UserMission

# Create your models here.
class Mood(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    # colors = models.ManyToManyField('Color')
    text = models.TextField(null=True)
    # selected_words = models.ManyToManyField('Word')
    created_at = models.DateTimeField(default=timezone.now)
    missions = models.ManyToManyField(UserMission, blank=True)

    def __str__(self):
        return f'{self.user.username} - {self.created_at}'

class Color(models.Model):
    mood = models.ForeignKey(Mood, on_delete=models.CASCADE, null=True)
    code = models.CharField(max_length=10)

class Word(models.Model):
    mood = models.ForeignKey(Mood, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)