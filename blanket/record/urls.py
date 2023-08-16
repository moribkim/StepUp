from django.urls import path
from .views import *

urlpatterns=[
    path('', index, name="index"),
    path('record/', record, name="record"),
    path('record_submit/', record_submit, name="record_submit"),
    path('record_update/<int:id>/', record_update, name="record_update"),    
]