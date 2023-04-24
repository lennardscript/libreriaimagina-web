from rest_framework import viewsets
from .serializer import BookSerializer
from .models import Book

class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()