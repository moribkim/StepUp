
from django.shortcuts import render, redirect
from django.contrib.auth.models import User 
from django.contrib import auth
from django.shortcuts import get_object_or_404
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from .models import UserProfile

def account_check(request):
    return render(request, 'account_check.html')

def signup(request):
    if request.method == 'POST':
        if request.POST['password'] == request.POST['confirm']: 
            username=request.POST.get('username')
            if User.objects.filter(username=username).exists(): #TODO: id 같은 경우 처리하기.
                return render(request, 'alert.html')
            password=request.POST.get('password')
            nickname = request.POST.get('last_name')
            if not nickname:  # 값이 빈 문자열이거나 None인 경우
                nickname = "익명"
            last_name = nickname
            user = User.objects.create_user(username=username, password=password, last_name=last_name) #email=email
            auth.login(request, user)
            return redirect('/')
    return render(request, 'signup.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(request, username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return render(request, 'badlogin.html', {'error' : 'username or password is incorrect.'})
    else:
        return render(request, 'login.html')


def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        return redirect('/')
    return render(request, 'login.html')

@login_required
def profile(request):
    userInfo = UserProfile.objects.get(user=request.user)
    userId=userInfo.user.username
    userName = userInfo.user.last_name
    userEmail =userInfo.email
    userDescription = userInfo.description
    userImage=userInfo.image
    return render(request, 'profile.html', {'userId': userId, 'userName': userName, 'userEmail':userEmail, 'userDesciption':userDescription, 'userImage':userImage})

@login_required
def profile_edit(request):
    userInfo = UserProfile.objects.get(user=request.user)
    userId=userInfo.user.username
    userName = userInfo.user.last_name
    userEmail =userInfo.email
    userDescription = userInfo.description
    userImage=userInfo.image
    return render(request,'profile_edit.html', {'userId': userId, 'userName': userName, 'userEmail':userEmail, 'userDescription':userDescription, 'userImage':userImage})

@login_required
def profile_update(request):
    if request.method == 'POST':
        userInfo = get_object_or_404(UserProfile, user = request.user)
        userInfo.image = request.FILES.get('userImage', userInfo.image)  # 이미지가 제공되지 않았을 경우 기존 이미지(또는 기본 이미지) 사용
        nickname = request.POST.get('userName')
        if not nickname:  # 값이 빈 문자열이거나 None인 경우
            nickname = "익명"
        userInfo.user.last_name = nickname
        userInfo.email = request.POST['userEmail']
        userInfo.description = request.POST['userDescription']
        userInfo.user.save() 
        userInfo.save()        
        '''
        # 서버 측에서 이메일 유효성 검사 -> 현재는 클라이언트에서만 진행
        email = request.POST.get('userEmail')
        if not re.match(r"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$", email):
            messages.error(request, '유효한 이메일 주소를 입력해주세요.')  # 오류 메시지 추가
            return redirect('profile_edit')  # 사용자를 편집 페이지로 다시 리디렉션
        '''
    return profile(request)

