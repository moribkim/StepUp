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
#from account import views as account
#from mission import views as mission
#from record import views as record
#from calenDar import views as calenDar
#from record.views import *
#from calenDar.views import *
#from home import views as home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('record/', include('record.urls')),
    path('mission/',include('mission.urls')),
    #@login_required에서 로그인 안되어있는 경우, accounts/login으로 이동하므로 아래 path 이름 변경하지 말기
    path('accounts/',include('account.urls')),
    path('calendar/', include('calenDar.urls')),
]
