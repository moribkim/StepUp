from django.shortcuts import render
from .models import HomeSetting
# Create your views here.
def quote(request):
    return render(request, 'quote.html')

def home(request):
    request
    return render(request,'home.html')

def desk(request):
    return render(request,'desk.html')

def  window(request):
    request.user
    