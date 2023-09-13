
from django.contrib import admin
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('record/', include('record.urls')),
    path('mission/',include('mission.urls')),
    #@login_required에서 로그인 안되어있는 경우, accounts/login으로 이동하므로 아래 path 이름 변경하지 말기
    path('accounts/',include('account.urls')),
    path('calendar/', include('calenDar.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #개발 모드일 때만
