from django.shortcuts import render, redirect, get_object_or_404
from record.models import *
import datetime
from django.utils import timezone
from calendar import monthrange
from mission.models import *
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def mood_calendar(request, year=None, month=None):
    today = timezone.now().date()

    year = int(year) if year else today.year
    month = int(month) if month else today.month

    # 해당 월의 첫 날과 마지막 날을 계산
    first_day = timezone.datetime(year, month, 1)
    last_day = timezone.datetime(year, month, monthrange(year, month)[1])

    # 요일에 따라 캘린더의 첫 주 시작 위치를 조정
    start_offset = first_day.weekday() + 1

    # 이전/다음 월의 날짜를 표시할 때 필요한 부분
    prev_month_last_day = first_day - timezone.timedelta(days=1)
    next_month_first_day = last_day + timezone.timedelta(days=1)

    # 해당 월의 week 채우기
    weeks = []
    week = [None] * start_offset
    weeks_color = []
    week_color = [None] * start_offset
    for day in range(1, last_day.day + 1):
        date = timezone.datetime(year, month, day)
        if Mood.objects.filter(created_at__date=date).exists():
            mood_colors = get_mood_colors(date)
        else:
            mood_colors = False
        week.append((date.day))
        week_color.append((mood_colors))
        if len(week) == 7:
            weeks.append(week)
            weeks_color.append(week_color)
            week = []
            week_color = []

    # 마지막 week 채우기
    if week:
        for i in range(len(week), 7):
            date = next_month_first_day + timezone.timedelta(days=i)
            week.append(None)
            week_color.append(None)
        weeks.append(week)
        weeks_color.append(week_color)

    context = {
        'today': today,
        'year': year,
        'month': month,
        'first_day': first_day,
        'last_day': last_day,
        'calendar': weeks,
        'calendar_color' : weeks_color
    }

    return render(request, 'mood_calendar.html', context)

@login_required
def mood_detail(request, year, month, day):
    date = datetime.date(year, month, day)
    try:
        mood = Mood.objects.get(created_at__date=date)
        colors = mood.color_set.all()
        words = mood.word_set.all()
        missions = []
        if mood.missions.exists():
            missions = mood.missions.all()
        return render(request, 'mood_detail.html', {'mood': mood, 'colors': colors, 'words': words, 'missions': missions})
    except:
        return render(request, 'mood_not_exist.html')

def get_mood_colors(date):
    mood = Mood.objects.filter(created_at__date=date)

    if mood:
        mood_colors = Color.objects.filter(mood__in=mood)[:4]
        return mood_colors
    else:
        return []

@login_required    
def record_edit(request, id):
    edit_mood = Mood.objects.get(id=id)
    colors = edit_mood.color_set.all()
    words = edit_mood.word_set.all()

    # year = edit_mood.created_at.year
    # month = edit_mood.created_at.month
    # day = edit_mood.created_at.day
    
    return render(request, 'record_edit.html', {'mood':edit_mood, 'colors': colors, 'words': words})