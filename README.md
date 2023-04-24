# Libreria Imagina
<p class=center>
  Integrantes:
  <ul>
    <li>Leandro Burgos</li>
    <li>Nicolás Varas</li>
    <li>Patricio Morales</li>
    <li>Maximiliano Velasquez</li>
  </ul>
</p>

## Configuración de Django, su Backend

Django funciona de manera virtualizada, es decir, se maneja en entornos virtuales, en este caso hay que instalar **[Pipenv](https://pipenv-es.readthedocs.io/es/latest/index.html)**
Se puede instalar con el siguiente comando:

```
pip install pipenv
```

El propio proyecto en Django tiene todos sus modulos instalados, así que no hay instalarlos nuevamente ya que todo viene integrado (en modo de desarrollo) en su archivo
``Pipfile``

## Activar el modo virtual

Para utilizar todos sus modulos integrados hay que activar su modo virtual para así podamos sacar el mayor rendimiento y no tener problemas o conflicto con los modulos
de Python. Para activarlo, por consula hay que introducir la siguiente instrucción:

```
pipenv shell
```

## Instalación de nuevos modulos

Tal vez uno querra instalar nuevos modulos e integrarlos en el archivo ``Pipfile`` que nos genera Pipenv, normalmente la instalación de modulo lo hacemos con el 
gestor de paquetes que trae por defecto Python: ``pip``. En este caso no se utiliza, si no que es reemplazado con ``pipenv install <name_modulo>``, así el modulo 
o paquete de Python se integre en su propia maquina virtual en modo de desarrollo y no tendrá inconveniente con el sistema operativo, Python o de cualquier 
otras circunstancias que se puede presentar.

## Configuración de React, su Frontend

Se recomienda trabajar con otro sistema de gestor de paquete que trae por defecto Node.js: ``npm``, por temas de velocidad, rendimiento y espacio en la memoria. 
Recomendamos usar [PnPm](https://pnpm.io/es/), hay otras propuestas más aparte de pnpm, está ``yarn``, gestor de paquetes de Node.js creado por Meta (ex Facebook). 
Pero para no tener muchas complicaciones es mejor utilizar el gestor de paquetes que ha sido desarrollada todo su Frontend, para así no tener problemas con 
sus dependencias y el manejo de ellas y versionados posteriores.

Para instalar pnpm se utiliza el siguiente comando, en el cual se ingresa por consola:
```
npm install -g pnpm
```
