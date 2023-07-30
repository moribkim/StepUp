from django.contrib import admin
from .models import Mission, UserMission

# Register your models here.
admin.site.register(Mission)
admin.site.register(UserMission)
