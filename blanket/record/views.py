from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Mood, Color, Word
from mission.models import UserMission
from django.utils import timezone
import datetime
#from mission.models import Mission
# Create your views here.

def index(request):
    return render(request, 'index.html')

def record(request):
    #user = request.user
    #today = timezone.now().date()
    return render(request, 'record.html') 

@login_required
def record_submit(request):
    if request.method == 'POST':
    

        selected_colors = request.POST.get('selected_colors')
        selected_colors_list = selected_colors.split(',') if selected_colors else []
        
        text = request.POST['text']
        
        selected_words = request.POST.get('selected_words')
        selected_words_list = selected_words.split(',') if selected_words else []
        
        #main_mission = Mission.objects.filter(mission_type='main').first()

        mood = Mood.objects.create(user=request.user, text=text)  

        for color_code in selected_colors_list:
            Color.objects.create(mood=mood, code=color_code)

        for word_text in selected_words_list:
            Word.objects.create(mood=mood, name=word_text)

        # 당일 수행한 미션과 연결
        today = timezone.now().date()
        completed_missions = UserMission.objects.filter(user=request.user, completed=True, date=today)
        for mission in completed_missions:
            mood.missions.add(mission)
            
    return render(request, 'record_submit.html')

def record_update(request, id):
    if request.method == 'POST':

        mood = Mood.objects.get(id=id)

        year = mood.created_at.year
        month = mood.created_at.month
        day = mood.created_at.day

        mood.word_set.all().delete()
        mood.color_set.all().delete()
    
        selected_colors = request.POST.get('selected_colors')
        selected_colors_list = selected_colors.split(',') if selected_colors else []
        
        text = request.POST['text']
        
        selected_words = request.POST.get('selected_words')
        selected_words_list = selected_words.split(',') if selected_words else []
        
        #main_mission = Mission.objects.filter(mission_type='main').first()
        mood.user = request.user
        mood.text = text

        for color_code in selected_colors_list:
            Color.objects.create(mood=mood, code=color_code)

        for word_text in selected_words_list:
            Word.objects.create(mood=mood, name=word_text)

        # 당일 수행한 미션과 연결
        # today = timezone.now().date()
        today = datetime.date(year, month, day)
        completed_missions = UserMission.objects.filter(user=request.user, completed=True, date=today)
        for mission in completed_missions:
            mood.missions.add(mission)
    return redirect('mood_detail', year, month, day)