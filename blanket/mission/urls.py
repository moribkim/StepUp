from django.urls import path
from .views import *


urlpatterns=[
    path('', mission_list, name="mission_list"),
    path('complete_mission/<int:mission_id>', complete_mission, name='complete_mission'),
    path('complete_mission_js/<int:mission_id>', complete_mission_js, name='change_mission_js'),
    path('change_mission/<int:mission_id>', change_mission, name='change_mission'),
    path('change_mission_js/<int:mission_id>', change_mission_js, name='change_mission_js'),
]