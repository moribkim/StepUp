
from django.urls import path
from .views import *
#from accounts import views as accounts_views #한 urs.pyl에서 모든 앱 url을 다 관리할 경우, 이름 충돌 방지를 위해 다른 이름(별명)으로 불러주기


urlpatterns=[
    path('', account_check, name='account_check'),
    #@login_required에서 로그인 안되어있는 경우, accounts/login으로 이동하므로 아래 path 이름 변경하지 말기
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('signup/', signup, name='signup'),
    path('profile/', profile, name='profile'),
]

