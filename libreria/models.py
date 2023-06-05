from django.db import models

class Book(models.Model):
    id_book = models.AutoField(primary_key=True)
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    price = models.BigIntegerField(blank=True, null=True)
    stock = models.IntegerField(default=0)
    thumbnail = models.ImageField(upload_to='books_thumbnail', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
      ordering = ('title',)
      verbose_name_plural = 'Libros'

    def __str__(self):
      return self.title
    
class Comuna(models.Model):
   id_comuna = models.AutoField(primary_key=True)
   nombre_comuna = models.CharField(max_length=250)