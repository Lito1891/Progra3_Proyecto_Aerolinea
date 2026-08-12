Proyecto aerolinea
Este repositorio contiene el proyecto final del curso de Programación 3.
El objetivo es desarrollar una página web para una aerolinea ficticia utilizando HTML, CSS y Bootstrap.

##

# Instrucciones para colaboradores


## Pasos para poder meter el proyecto y manipularlo desde su equipo local 

### 1 - Clonar el repositorio y creación de carpeta de trabajo

Se usa el comando "git clone https://github.com/Lito1891/Progra3_Proyecto_Aerolinea.git"

### 2 - Entrar en la carpeta del proyecto creada

Se usa el comando "cd Progra3_Proyecto_Aerolinea"

### 3 - Luego de entrar a la carpeta que se enlazó al repositorio

Se usa el comando "git pull" para que les "jale" o descargue lo que haya en el repositorio hasta ese momento (esto deben hacerlo SIEMPRE antes de empezar a trabajar en sus equipos para que se descarguen lo que los otros hayan realizado)

## 

## Pasos para SUBIR su avance desde su equipo local 

  1. Se usa el comando "git add ."
  2. Se usa el comando "git commit -m "mensaje de ejemplo"" por ejemplo = git commit -m "Se crean más carpetas de tal cosa" (siempre el mensaje entre comillas)
  3. Se usa el comando "git push" (para subir lo que tengan de avance y que todos al ahcer pull lo descarguen y todos tengan todo de todos)

## 

Cada colaborador debe crear su propia rama para trabajar: bash git checkout -b nombre-rama (esto falta de ver si lo vamos a tirar de una vez a la Master o si se hará así)

Los commits que hagan por favor hacerlos de forma que quede grabado lo que hicieron, EVITEN escribir cosillas como "Se actualiza código", "se cambia algo", esto para darle mejor trazabilidad a los cambios que haga cada uno y saber a dónde volver en caso de que tengamos que hacer cambios y reestablecer cosas de antes
No trabajar directamente en la rama main.
Revisar los Pull Requests de otros compañeros antes de aprobarlos.
Mantener la carpeta img organizada y con nombres de archivo simples (ejemplo: aerolinea.jpg, no aerolinea Ficticia final 1.JPG).

## 

# Instrucciones y documentación general del trabajo

##

## Pendiente...


# ¿Cómo iniciar?

## Requisitos previos

### 1. Tener instalado XAMPP
### 2. Descargar el archivo comprimido desde el repositorio de GitHub o bien empleando el comando:
        "git clone https://github.com/Lito1891/Progra3_Proyecto_Aerolinea.git"

# Descripción del proyecto
### El presente proyecto consta de la construcción de una página web enfocada en servir como portal de una aerolínea comercial, respetando siempre el modelo vista controlador (MVC). La misma emplea archivos con extensión HTML, PHP, CSS y Js enlazados mediante rutas dinámicas omitiendo la mala práctica del uso de direcciones estáticas que pudiesen afectar al funcionamiento del proyecto.

# Estructura del proyecto

## Carpeta raíz

### Carpeta Assets: Recursos estáticos del frontend

#### Sub carpeta css: Hojas de estilo usadas para modificación visual de archivos html
#### Sub carpeta img: Imágenes del sitio (fotosIndex, iconos, logos)
#### Sub carpeta js: Scripts propios del cliente (JS)

### Carpeta Controllers: Lógica de control para manejar peticiones y usar los modelos

### Carpeta Models: Lógica de datos tomados como base o información como base en los controladores

### Carpeta Views: Páginas HTML que el usuario ve e interactúa de primera mano

# Documentos con extensión HTML

## Index.html

### Página creada como portal de inicio de la aerolínea, la misma presenta una sección de barra de navegación, otra de banner, otra de principales destinos y finalmente el footer.

### Sus atributos visuales se manejaron con Bootstrap y un archivo CSS enlazado directamente con el nombre de "index.css".

### El mismo no presenta el uso de JavaScript por lo que no le es aplicable un enlace a un controlador en específico.

## SucursalesContacto.html

### Página creada como punto de ayuda para saber dónde están las ubicaciones físicas y sus datos de contacto específicos por cada una, la misma presenta una sección de barra de navegación, una sección principal que contiene las ubicaciones y datosd e contacto y finalmente el footer.






