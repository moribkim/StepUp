from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class HomeSetting(models.Model):
    #home 밝기 조절 변수, false가 어두운 상태.
    brightness=models.BooleanField(default=False) 
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.username} - HomeSetting'
