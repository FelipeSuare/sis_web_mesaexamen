from django.urls import path
from . import views

app_name = 'docentes'

urlpatterns = [
    path('index/', views.home, name='index'),
]