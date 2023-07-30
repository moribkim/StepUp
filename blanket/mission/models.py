from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Mission(models.Model):
    MISSION_TYPES = (
        ('main', 'Main'),
        ('sub', 'Sub'),
    )
    title = models.CharField(max_length=200)
    mission_type = models.CharField(max_length=4, choices=MISSION_TYPES,default='main')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

class UserMission(models.Model):
    mission = models.ForeignKey(Mission, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    completed_at = models.DateField(default=timezone.now)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.mission.title
    #class Meta:
    #    unique_together = ['mission', 'user', 'completed_at']