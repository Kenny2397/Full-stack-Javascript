# Curso de Fundamentos de Node.js

## 1.- EventLoop: asíncrona por diseño
Event Queue: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

Event Loop: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

Thread Pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.
image.png

## 2.- Monohilo: implicaciones en diseño y seguridad
Al ser monohilo el peligro recae en que si el código se ejectua y no tenemos cuidado el no asignar una variable de manera correcta me puede arrojar un error.
Hay que escuchar los errores, es muy imporante de todo lo que pase en el código. Comprobar funciones y revisar lo que posiblmente puede fallar.
Es clave estar pendiente de todos los errores que pueda cortar la ejecución, lo que se corta corta todo.
Todo lo que sea asíncono y lo pueda llevar a ello, pues llevarlo, y todo lo que no, revisar que no corte el programa.

# 3.-Configurar las variables de entorno en Node.js
NOMBRE=kENNY node 02-entorno.js
# 4.-Herramientas para ser más felices: Nodemon y PM2
npm install -g nodemon
pm2 para produccion
