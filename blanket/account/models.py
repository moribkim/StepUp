from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.utils import timezone

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(default=timezone.now().date())

    def __str__(self):
        return f'Review by {self.user.username}'
#from django.contrib.auth.models import AbstractUser



class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(blank=True,null=True,upload_to='userProfileImage') #upload_to=img_upload_to

    def __str__(self):
        return f'id:{self.user.username} - nickname:{self.user.last_name} - profile'
#이미지 저장 경로를 동적으로 설정하기 위한 함수
"""
def img_upload_to(instance, filename):
    # instance는 UserProfile 객체
    # 파일 저장경로를 동일하게 유지하여, 사진을 업로드하면, 유저마다 같은 경로로 덮어씌워진다.
    return f'profile/{instance.user.username}/profile_picture.jpg'
"""