from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    price = models.BigIntegerField(blank=True, null=True)
    stock = models.IntegerField(default=0)
    editorial = models.CharField(max_length=100, blank=True)
    thumbnail = models.ImageField(upload_to='books/thumbnail', blank=True, null=True)

    class Meta:
      ordering = ('title',)
      verbose_name_plural = 'Libros'

    def __str__(self):
      return self.title
