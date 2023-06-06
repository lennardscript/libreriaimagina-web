from django.urls import path
from .views import *

urlpatterns = [
    path('', libros, name='libros')
]


