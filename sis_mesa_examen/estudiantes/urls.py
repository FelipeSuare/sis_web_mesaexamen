from django.urls import path
from . import views

app_name = 'estudiantes'
urlpatterns = [ 
    path('estudiantes/', views.home, name='index'),
]
