from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Review
from .models import UserProfile

admin.site.register(Review)
admin.site.register(UserProfile)
