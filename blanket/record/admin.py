from django.contrib import admin
from .models import Mood, Color, Word

# Register your models here.
admin.site.register(Mood)
admin.site.register(Color)
admin.site.register(Word)