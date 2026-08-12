# Proyecto aerolinea

## Descripción del proyecto

El presente proyecto consta de la construcción de una página web enfocada en servir como portal de una aerolínea comercial, respetando siempre el modelo vista controlador (MVC). La misma emplea archivos con extensión HTML, PHP, CSS y Js enlazados mediante rutas dinámicas omitiendo la mala práctica del uso de direcciones estáticas que pudiesen afectar al funcionamiento del proyecto.

### Grupo 01 - Integrantes:

Jorge Solano

Cristofer Madrigal

Herlyn Espinoza



## ¿Cómo iniciar?

### Requisitos previos

1. Tener instalado XAMPP
2. Descargar el archivo comprimido desde el repositorio de GitHub o bien empleando el comando:
        "git clone https://github.com/Lito1891/Progra3_Proyecto_Aerolinea.git"

## Estructura del proyecto

Carpeta raíz: contiene todo el proyecto organizado por carpetas y archivos según el modelo vista controlador (MVC)

Carpeta Assets: Recursos estáticos del frontend

- Sub carpeta css: Hojas de estilo usadas para modificación visual de archivos html
- Sub carpeta img: Imágenes del sitio (fotosIndex, iconos, logos)
- Sub carpeta js: Scripts propios del cliente (JS)

Carpeta Controllers: Lógica de control para manejar peticiones y usar los modelos

Carpeta Models: Lógica de datos tomados como base o información en los controladores

Carpeta Views: Páginas que el usuario ve e interactúa de primera mano

---

## Carpeta Views

Descripción: contiene las vistas creadas para que los usuarios manipulen de primera mano e interactuden y desplacen sobre la página.

---

### Nombre: Index.html

Descripción: página creada como portal de inicio de la aerolínea que se abre al iniciar el proyecto de forma automática.

Secciones que contiene: barra de navegación, banner de aerolínea, principales destinos de la aerolínea, footer.

Estilos: uso de Bootstrap y enlace directo a index.css

JavaScript asociado: no contempla un JavaScript asociado.

Controlador asociado: no contempla un controlador asociado.

---

### Nombre: SucursalesContacto.html

Descripción: página creada como punto de ayuda para saber dónde están las ubicaciones físicas y sus datos de contacto específicos por cada una

Secciones que contiene: barra de navegación, contenido principal de información de sucursales, footer.

Estilos: uso de Bootstrap y enlace directo a sucursalesContacto.css

JavaScript asociado: no contempla un JavaScript asociado.

Controlador asociado: no contempla un controlador asociado.

---

### Nombre: login.html

Descripción: página creada como punto de acceso para el dashboard de métricas para los usuarios.

Secciones que contiene: barra de navegación, contenido central que abarca el formulario del login, footer.

Estilos: Bootstrap y enlace directo a login.css.

Controlador asociado: enlazado directamente a controladorLogin.js quien se encarga de realizar las validaciones correspondientes para redireccionar al dashboard.

---

### Nombre: destinos.html

Descripción:

Secciones que contiene:

Estilos:

JavaScript asociado:

Controlador asociado:

---

### Nombre: reservaVuelos.html

Descripción:

Secciones que contiene:

Estilos:

JavaScript asociado:

Controlador asociado:

---

### Nombre: vuelos.html

Descripción:

Secciones que contiene:

Estilos:

JavaScript asociado:

Controlador asociado:

---

### Nombre: dashboard.php

Descripción: vista que genera gráficos de métricas obtenidas por el usuario al usar los servicios de la aerolínea.

Secciones que contiene: resalta su barra de navegación, contenido de generación de gráficos, footer.

Estilos: Bootstrap y para el correcto funcionamiento se maneja por varios documentos dentro de la carpeta "dist" ubicada en la carpeta Views.

JavaScript asociado: Para el correcto funcionamiento se maneja por varios documentos dentro de la carpeta "plugins" ubicada en la carpeta Views.

---

## Carpeta Assets

Descripción: contiene los elementos estáticos del proyecto como estilos, funcionalidades en JavaScript e imágenes empleaas en las diversas páginas.

---

### Sub carpeta css

Descripción: contiene los estilos que modifican algunas características técnicas de las vistas del proyecto.

---

### Nombre: index.css

Descripción: archivo que modifica los estilos de Index.html directamente.

Archivos HTML asociados: Inde.html

---

### Nombre: login.css

Descripción: archivo que modifica los estilos de login.html directamente.

Archivos HTML asociados: login.html

---

### Nombre: sucursalesContaco.css

Descripción: archivo que modifica los estilos de sucursalesContacto.html directamente.

Archivos HTML asociados: sucursalesContacto.html

---

### Nombre:  destinos.css

Descripción:

Archivos HTML asociados:

---

### Nombre: vuelos.css

Descripción:

Archivos HTML asociados:

---

### Sub carpeta img

Descripción: contiene imágenes empleadas durante el proyecto, dentro de la misma se encuentra dotosDestinos, dotosIndez, fotosSucursalesContacto, fotosVuelos, de esta carpeta salen las imagenes para todo el proyecto a excepción del dashboard que tiene sus propios recursos dentro de la carpeta Views.

---

### Sub carpeta js

Descripción: contiene los elementos js que no sean catalogados como controladores o como modelos.

---

### Nombre: reservaVuelos.js

Descripción:

Archivos HTML asociados:

Funcionalidades:

Elementos que manipula:

Controlador asociado:

---

### Nombre: vuelos.js

Descripción:

Archivos HTML asociados:

Funcionalidades:

Elementos que manipula:

Controlador asociado:

---

## Carpeta Models

Descripción: contiene modelos que los controladores tomarán como información base para validaciones y acciones a eventos.

---

### Nombre: modeloDashboard.js

Descripción: archivo que contiene los datos base para la correcta generación de gráficos y métricas en el dashboard por medio del controlador controladorDashboard.js.

Funcionalidad: almacenar datos base para generación de métricas y gráfico.

Controlador asociado: controladorDashboard.js.

---

### Nombre: modeloDestino.js

Descripción:

Funcionalidad:

Métodos o funciones principales:

Controlador asociado:

---

### Nombre: modeloLogin.js

Descripción: archivo que contiene los datos base para el correcto acceso al dashboard por medio de controladorLogin.js.

Funcionalidad: almacenar los datos de usuario y contraseña para el inicio de sesión en la vista login.

Controlador asociado: controladorLogin.js

---

## Carpeta Controllers

Descripción: contiene los controladores que luego tomarán los modelos para responder a eventos o peticiones realizadas en las vistas.

---

### Nombre: controladorDashboard.js

Descripción:

Archivos HTML asociados:

Funcionalidades:

Elementos que manipula:

Modelo asociado:

---

### Nombre: controladorDestino.js

Descripción:

Archivos HTML asociados:

Funcionalidades:

Elementos que manipula:

Modelo asociado:

---

### Nombre: controladorLogin.js

Descripción:

Archivos HTML asociados:

Funcionalidades:

Elementos que manipula:

Modelo asociado:

---
