from django.shortcuts import render
from .models import Mission,UserMission

def mission_view(request):
    user = request.user  # Get the currently logged in user

    # Get the main mission and sub missions for this user
    user_main_mission = UserMission.objects.get(user=user, mission__mission_type='main')
    user_sub_missions = UserMission.objects.filter(user=user, mission__mission_type='sub')

    # Pass the missions to the template
    context = {
        'main_mission': user_main_mission,
        'sub_missions': user_sub_missions,
    }
    return render(request, 'missions.html', context)

"""
TODO: 메시지 브로커 설치( RabbitMQ나 Redis )
from celery import shared_task
from celery.schedules import crontab
from celery.task import periodic_task
from .models import CompletedMission

@periodic_task(run_every=crontab(hour=0, minute=0))
def reset_daily_missions():
    CompletedMission.objects.all().delete()
"""