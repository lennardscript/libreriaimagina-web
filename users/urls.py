from django.urls import path
from . import views

""" 
Rutas que puedes colocar 

path('put/', views.putUser'),
path('image/', views.uploadImage),
path('getUsers/', views.getUsers),

"""

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('register/', views.register),
    path('userProfile/', views.getUserProfile),
    path('soloUser/<int:pk>/', views.getSoloUser),
]


