from django.shortcuts import render
from mission.models import UserMission
from mission.views import *

def quote(request):
    return render(request, 'quote.html')

def home(request):
    request
    return render(request,'home.html')

def desk(request):
    return render(request,'desk.html')

# 화면 밝기 조절: 유저가 그날 mission 페이지에 들어간 적이 없으면 dark(false)
@login_required
def brightening(request):
    if request.method == "GET":
        user=request.user
        today = timezone.now().date()
        # 오늘 날짜에 해당 사용자에게 할당된 미션이 있는지 확인
        brightness = UserMission.objects.filter(user=user, date=today).exists()
        return JsonResponse({'brightness': brightness}, status=200)
    return JsonResponse({'error': 'Invalid method'}, status=400)