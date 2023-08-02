"""
URL configuration for blanket project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from account import views as account
from mission import views as mission
from record.views import *
from calenDar.views import *
from home import views as home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name="index"),
    path('record/', record, name="record"),
    path('record_submit/', record_submit, name="record_submit"),
    path('mission/',include('mission.urls')),
    #path('login/',include('account.urls')),
    path('account/',include('account.urls')),
    path('mood_calendar/', mood_calendar, name="mood_calendar"),
    path('mood_calendar/<int:year>-<int:month>-<int:day>/', mood_detail, name='mood_detail'),
    path('quote/', home.quote, name='quote')
]
