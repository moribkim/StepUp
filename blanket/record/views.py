from django.shortcuts import render
from .models import Mood, Color, Word

# Create your views here.

def index(request):
    return render(request, 'index.html')

def record(request):
    return render(request, 'record.html') 

def record_submit(request):
    if request.method == 'POST':
        selected_colors = request.POST.get('selected_colors')
        selected_colors_list = selected_colors.split(',') if selected_colors else []
        
        text = request.POST['text']
        
        selected_words = request.POST.get('selected_words')
        selected_words_list = selected_words.split(',') if selected_words else []
        
        
        mood = Mood.objects.create(user=request.user, text=text)

        for color_code in selected_colors_list:
            Color.objects.create(mood=mood, code=color_code)

        for word_text in selected_words_list:
            Word.objects.create(mood=mood, name=word_text)
            
    return render(request, 'record_submit.html')