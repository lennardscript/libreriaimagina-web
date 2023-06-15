# Libreria Imagina | Integración de plataformas ASY_001
<p class='center'>
  Profesor:
  <ul>
    <li>
      Pavel Nicola Morales Bustamante
    </li>
  </ul>
</p>
<p class='center'>
  Integrantes:
  <ul>
    <li>Leandro Burgos</li>
    <li>Nicolás Varas</li>
    <li>Patricio Morales</li>
    <li>Maximiliano Velasquez</li>
  </ul>
</p>

## Configuración de Django, su Backend 

Las aplicaciones en Python usualmente hacen uso de paquetes y módulos que no forman parte de la librería estándar. Las aplicaciones a veces necesitan una versión específica de una librería, debido a que dicha aplicación requiere que un bug particular haya sido solucionado o bien la aplicación ha sido escrita usando una versión obsoleta de la interfaz de la librería.

Esto significa que tal vez no sea posible para una instalación de Python cumplir los requerimientos de todas las aplicaciones. Si la aplicación A necesita la versión 1.0 de un módulo particular y la aplicación B necesita la versión 2.0, entonces los requerimientos entran en conflicto e instalar la versión 1.0 o 2.0 dejará una de las aplicaciones sin funcionar.

Para no presentar esta problemática, Django funciona de manera virtualizada, es decir, se maneja en entornos virtuales, en este caso hay que instalar **[Pipenv](https://pipenv-es.readthedocs.io/es/latest/index.html)**
Se puede instalar con el siguiente comando:

```
pip install pipenv
```

El propio proyecto en Django tiene todos sus modulos instalados, así que no hay que instalarlos nuevamente ya que todo viene integrado (en modo de desarrollo) en su archivo
``Pipfile``

## API de Librería Imagina

Como el caso pide como requerimiento una API independiente del proyecto, en nuestro caso para acelerar el desarrollo y no tener muchas complicaciones, la API de Librería Imagina se ha **[dockerizado](https://www.docker.com/)** para asi facilitar el despliegue de ella.

El **[repositorio](https://github.com/lennardscript/api-alphilia)** de la API se encuentra disponible.

## Activar el modo virtual

Para utilizar todos sus modulos integrados hay que activar su modo virtual para así podamos sacar el mayor rendimiento y no tener problemas o conflicto con los modulos
de Python. Para activarlo, por consola hay que introducir la siguiente instrucción:

```
pipenv shell
```

## Instalación de nuevos modulos

Tal vez uno querra instalar nuevos modulos e integrarlos en el archivo ``Pipfile`` que nos genera Pipenv, normalmente la instalación de modulo lo hacemos con el 
gestor de paquetes que trae por defecto Python: ``pip``. En este caso no se utiliza, si no que es reemplazado con ``pipenv install <name_modulo>``, así el modulo o paquete de Python se integre en su propia maquina virtual en modo de desarrollo y no tendrá inconveniente con el sistema operativo, Python o de cualquier otras circunstancias que se puede presentar.

## Levantar servidor de Django

Django posee su propio servidor ligero en el que podemos desarrollar rápidamente sin tener que lidiar con otros servidores en modo producción. El servidor en sí
recarga automáticamente el código de Python por cada petición según sea necesario. **No es necesario reiniciar el servidor de Django para que los cambios surgan
efecto**, en algunas situaciones dadas por el desarrollo, sí es necesario reiniciar el servidor, por ejemplo agregar una funcionalidad de añadir archivos.

Para levantar el servidor de Django, se debe introducir el siguiente comando por consola (dentro del directorio en donde está el proyecto Django)

```
python manage.py runserver
```

## Configuración de React, su Frontend

Se recomienda trabajar con otro sistema de gestor de paquete que trae por defecto Node.js: ``npm``, por temas de velocidad, rendimiento y espacio en la memoria. 
Recomendamos usar [PnPm](https://pnpm.io/es/), hay otras propuestas más aparte de pnpm, está ``yarn``, gestor de paquetes de Node.js creado por Meta (ex Facebook). 
Pero para no tener muchas complicaciones es mejor utilizar el gestor de paquetes que ha sido desarrollada todo su Frontend, para así no tener problemas con 
sus dependencias y el manejo de ellas y versionados posteriores.

Para instalar pnpm se utiliza el siguiente comando, en el cual se ingresa por consola:

```
npm install -g pnpm
```

## Aclaración

En este proyecto no se ha utilizado el método tradicional para crear un proyecto de React, todo ha sido creado por [Vite](https://vitejs.dev/) que es una manera
de crear un entorno de desarrollo muchisímo más rápido y configurado al momento.

## Instalar o inyectar dependencias en Node

Al momento de clonar un repositorio de GitHub, es necesario instalar sus respectivas dependencias, se utilizando el siguiente comando:

```
pnpm install
```

Se debe instalar las dependencias en la carpeta que se llama ``client`` ya que es el directorio en donde esta alojado el proyecto de React y es ahí donde se maneja
todas sus dependencias.

Normalmente las dependencias de Node se añaden utilizando ``npm``, en este caso, como se ha instalado ``pnpm`` toda dependencia se añade con ella. Por ejemplo:

```
pnpm add <name_dependence>
```

## Levantar servidor de React

React no cuenta un servidor en el que podemos levantar como sí lo posee Django, por lo tanto, esta funcionalidad lo hace el propio Node.js con un comando estándar:

```
pnpm run dev
```

Este comando lo que hace es ejecutar un script definido en el ``package.json``
