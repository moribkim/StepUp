from django.urls import path
from .views import *


urlpatterns=[
    path('', mission_list, name="mission_list"),
    path('complete_mission/<int:mission_id>', complete_mission, name='complete_mission'),
]