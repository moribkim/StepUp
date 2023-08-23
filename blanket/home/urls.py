from django.urls import path
from .views import *
urlpatterns=[
    #path('quote/', quote, name='quote'),
    path('',home,name='home'),
    path('desk',desk,name='desk'),
]