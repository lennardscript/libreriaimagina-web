from django.shortcuts import render
from django.db import connection

def libros(request):
    print(listado_libros())
    return render(request, 'libreria/procedimientos.html')

def listado_libros():
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_LISTAR_LIBROS", [out_cur])

    lista = []

    for x in out_cur:
        lista.append(x)

    return x