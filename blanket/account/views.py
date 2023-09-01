
from django.shortcuts import render, redirect
from django.contrib.auth.models import User 
from django.contrib import auth
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from .models import *

def account_check(request):
    return render(request, 'account_check.html')


def signup(request):
    if request.method == 'POST':
        if request.POST['password'] == request.POST['confirm']: 
            username=request.POST.get('username')
            if User.objects.filter(username=username).exists(): #TODO: id 같은 경우 처리하기.
                return render(request, 'alert.html')
            password=request.POST.get('password')
            last_name=request.POST.get('last_name')
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
    user=request.user
    userId = user.username
    userName =user.last_name
    return render(request, 'profile.html', {'userId': userId, 'userName': userName})

@login_required
def review(request):
    if request.method == 'POST':
        new_review = Review()
        new_review.user = request.user
        new_review.rating = request.POST['selected_stars']
        new_review.comment = request.POST['text']
        new_review.save()
        return redirect('home')
    return render(request, 'review.html')