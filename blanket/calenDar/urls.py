from django.urls import path
from .views import *

urlpatterns=[
    path('', mood_calendar, name="mood_calendar"),
    path('mood_calendar/<int:year>-<int:month>-<int:day>/', mood_detail, name='mood_detail'),
    path('record_edit/<int:id>/', record_edit, name="record_edit"),
]