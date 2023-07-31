from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Mission(models.Model):
    MISSION_TYPE_CHOICES = [
        ('main', 'Main'),
        ('sub', 'Sub'),
    ]
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=5, choices=MISSION_TYPE_CHOICES,default='main')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class UserMission(models.Model):
    mission = models.ForeignKey(Mission, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now().date())
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.user.username} - {self.date} - {self.mission.name}'
    
    #class Meta:
    #    unique_together = ['mission', 'user', 'completed_at']