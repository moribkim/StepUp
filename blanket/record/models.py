from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import User
from mission.models import Mission, UserMission

# Create your models here.
class Mood(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    # colors = models.ManyToManyField('Color')
    text = models.TextField()
    # selected_words = models.ManyToManyField('Word')
    created_at = models.DateTimeField(default=timezone.now)
    mission = models.ForeignKey(UserMission, on_delete=models.SET_NULL, null=True)

class Color(models.Model):
    mood = models.ForeignKey(Mood, on_delete=models.CASCADE, null=True)
    code = models.CharField(max_length=10)

class Word(models.Model):
    mood = models.ForeignKey(Mood, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)