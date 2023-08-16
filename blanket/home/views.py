from django.shortcuts import render

# Create your views here.
def quote(request):
    return render(request, 'quote.html')

def home(request):
    return render(request,'home.html')

def desk(request):
    return render(request,'desk.html')
