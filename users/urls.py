from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

""" 
Rutas que puedes colocar 

path('put/', views.putUser'),
path('image/', views.uploadImage),
path('getUsers/', views.getUsers),

"""

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title = 'Users API')),
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('register/', views.register),
    path('userProfile/', views.getUserProfile),
    path('soloUser/<int:pk>/', views.getSoloUser),
    path('getUsers/', views.getUsers),
]


