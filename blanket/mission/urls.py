from django.urls import path
from .views import *


urlpatterns=[
    path('', mission_view, name="mission_view"),
]