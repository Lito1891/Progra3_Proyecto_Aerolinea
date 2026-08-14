# Proyecto Aerolínea

## Descripción del proyecto

El presente proyecto consta de la construcción de una página web enfocada en servir como portal de una aerolínea comercial, respetando siempre el modelo vista controlador (MVC). La misma emplea archivos con extensión HTML, PHP, CSS, Json y Js enlazados mediante rutas dinámicas omitiendo la mala práctica del uso de direcciones estáticas que pudiesen afectar al funcionamiento del proyecto.

### Grupo 01 - Integrantes:

- Jorge Solano
- Cristofer Madrigal
- Herlyn Espinoza

## Tabla de contenidos

- [¿Cómo iniciar?](#cómo-iniciar)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Carpeta Views](#carpeta-views)
  - [Carpeta Assets](#carpeta-assets)
    - [Sub carpeta css](#sub-carpeta-css)
    - [Sub carpeta img](#sub-carpeta-img)
    - [Sub carpeta js](#sub-carpeta-js)
- [Carpeta Models](#carpeta-models)
- [Carpeta Controllers](#carpeta-controllers)

## ¿Cómo iniciar?

### Requisitos previos

1. Tener instalado XAMPP para poder tener activo el servidor web de Apache.
2. Descargar el archivo comprimido desde el repositorio de GitHub o bien empleando el comando en la terminal de git:
```bash
   git clone https://github.com/Lito1891/Progra3_Proyecto_Aerolinea.git
```

## Estructura del proyecto

- Carpeta raíz: contiene todo el proyecto organizado por carpetas y archivos según el modelo vista controlador (MVC)

- Carpeta Controllers: Lógica de control para manejar peticiones y usar los modelos

- Carpeta Models: Lógica de datos tomados como base o información en los controladores

- Carpeta Views: Páginas que el usuario ve e interactúa de primera mano
  
   - Sub carpeta Assets: Recursos estáticos del frontend

        - Sub sub carpeta css: Hojas de estilo usadas para modificación visual de archivos html
        - Sub sub carpeta img: Imágenes del sitio (fotosIndex, iconos, logos)
        - Sub sub carpeta js: Scripts estáticos de apoyo a vistas

---

## Carpeta Views

- Descripción: contiene las vistas creadas para que los usuarios manipulen de primera mano e interactúan y desplacen sobre la página.

---

### Nombre: Index.html

- Descripción: página creada como portal de inicio de la aerolínea que se abre al iniciar el proyecto de forma automática.

- Secciones que contiene: barra de navegación, banner de aerolínea, principales destinos de la aerolínea, footer.

- Estilos: uso de Bootstrap y enlace directo a index.css

- JavaScript asociado: no contempla un JavaScript asociado.

- Controlador asociado: no contempla un controlador asociado.

---

### Nombre: sucursalesContacto.html

- Descripción: página creada como punto de ayuda para saber dónde están las ubicaciones físicas y sus datos de contacto específicos por cada una

- Secciones que contiene: barra de navegación, contenido principal de información de sucursales, footer.

- Estilos: uso de Bootstrap y enlace directo a sucursalesContacto.css

- JavaScript asociado: no contempla un JavaScript asociado.

- Controlador asociado: no contempla un controlador asociado.

---

### Nombre: login.html

- Descripción: página creada como punto de acceso para el dashboard de métricas para los usuarios.

- Secciones que contiene: barra de navegación, contenido central que abarca el formulario del login, footer.

- Estilos: Bootstrap y enlace directo a login.css.

- Controlador asociado: enlazado directamente a controladorLogin.js quien se encarga de realizar las validaciones correspondientes para redireccionar al dashboard.

---

### Nombre: destinos.html

- Descripción: Página creada como catálogo principal de la aerolínea para visualizar la oferta completa de destinos de viaje, permitiendo su consulta   mediante opciones de filtrado.

- Secciones que contiene: Barra de navegación, título principal de la sección, botones de filtro por categoría (todos, internacionales, nacionales), contenedor/grilla para renderizado de destinos y footer (pie de página).

- Estilos: Uso de Bootstrap y enlace directo a destinos.css.

- JavaScript asociado: No contempla un JavaScript estático independiente (la interactividad se gestiona dinámicamente mediante el módulo controlador).

- Controlador asociado: Contempla el controlador controladorDestinos.js

---

### Nombre: reservaVuelos.html

- Descripción: pagina diseñada para que el usuario ingrese datos requeridos para finalizar la reservación de un vuelo, podrá visualizar precio del tiquete y el destino del mismo, si todo fluye, al final vera un mensaje de confirmación y será redirigido a la página index.html.

- Secciones que contiene: barra de navegacion, formulario de pago, carrito de compras y footer.

- Estilos: Uso de Bootstrap y ruta dinámica de vuelos.css y index.css.

- JavaScript asociado: reservaVuelos.js, consta de 3 partes, primero la sección para obtener parámetros de la página vuelos.html, y asignarlos a una variable, para uso en sweetAlert, datos del carrito para que los muestre basado en la elección del destino, y la validación del formulario de pago, evita que queden espacios en blanco, mostrar mensaje de pago con éxito y redirigir a index.html

- Controlador asociado: ninguno.

---

### Nombre: vuelos.html

- Descripción: Página diseñada para buscar vuelos hacia destinos previamente mostrados en las páginas anteriores, se solicita información clave para buscar un vuelo mediante un sencillo formulario, al completar los campos requeridos y darle ver vuelo, el usuario podrá ver su destino seleccionado, con diversas opciones de clases de vuelo, incluso vera las aerolíneas disponibles para dicho destino. A su vez un hermoso carrusel con imágenes de destinos ira dando paso a que el usuario siga a la sección de pago.

- Secciones que contiene: barra de navegación (<header>), buscador de vuelos (<div class="buscadorDeVuelos">), aquí está el formulario para buscar vuelos, en la sección main tiene (<div class="allCountries">) aquí está un div para cada destino, que se divide en dos secciones, una parte que muestra aerolínea disponibles mediante class="modal, y otra un acordeón con opciones de vuelos <div class="accordion" id="accordionExampleFrancia">, tiene  footer.

- Estilos: Uso de Bootstrap y ruta dinámica de vuelos.css y index.css.

- JavaScript asociado:vuelos.js, tiene dos funciones, la primera aplica para el formulario, para que el usario no pueda escoger un dia que haya pasado, consta de una funcion que dice que fecha min tiene que ser hoy, y aplica para fecha ida, y fecha de regreso. Y la función dos es la validación del form, para que no queden espacio en blanco, y que basado en la elección del usuario muestre le acordeón del país seleccionado.

- Controlador asociado: ninguno.

---

### Nombre: dashboard.php

- Descripción: vista que genera gráficos de métricas obtenidas por el usuario al usar los servicios de la aerolínea.

- Secciones que contiene: resalta su barra de navegación, contenido de generación de gráficos, footer.

- Estilos: Bootstrap y para el correcto funcionamiento se maneja por varios documentos dentro de la carpeta "dist" ubicada en la carpeta Views.

- JavaScript asociado: Para el correcto funcionamiento se maneja por varios documentos dentro de la carpeta "plugins" ubicada en la carpeta Views.

---

### Nombre: carpeta dist

- Descripción: contiene elementos necesarios para el funcionamiento del dashboard.

- Archivo PHP asociado: dashboard.php

---

### Nombre: carpeta plugins

- Descripción: contiene elementos necesarios para el funcionamiento del dashboard.

- Archivo PHP asociado: dashboard.php

---

## Carpeta Assets

- Descripción: contiene los elementos estáticos del proyecto como estilos, funcionalidades en JavaScript e imágenes empleadas en las diversas páginas.

---

### Sub carpeta css

- Descripción: contiene los estilos que modifican algunas características técnicas de las vistas del proyecto.

---

### Nombre: index.css

- Descripción: archivo que modifica los estilos de Index.html directamente.

- Archivos HTML asociados: Index.html

---

### Nombre: login.css

- Descripción: archivo que modifica los estilos de login.html directamente.

- Archivos HTML asociados: login.html

---

### Nombre: sucursalesContacto.css

- Descripción: archivo que modifica los estilos de sucursalesContacto.html directamente.

- Archivos HTML asociados: sucursalesContacto.html

---

### Nombre: destinos.css

- Descripción: archivo que modifica los estilos de destinos.html directamente, controlando la grilla responsive, las tarjetas dinámicas de destinos, los botones de filtrado y los elementos visuales de la página.


- Archivos HTML asociados:  destinos.html

---

### Nombre: vuelos.css

- Descripción: modifica botones, ancho de imágenes y su posición de vuelos.html, controla que los acordeónes no sea visibles a menos que se seleccione un destino, y solo mostrara ese destino

- Archivos HTML asociados: vuelos.html

---

### Sub carpeta img

- Descripción: contiene imágenes empleadas durante el proyecto, dentro de la misma se encuentra fotosDestinos, fotosIndex, fotosSucursalesContacto, fotosVuelos, de esta carpeta salen las imagenes para todo el proyecto a excepción del dashboard que tiene sus propios recursos dentro de la carpeta Views.

---

### Sub carpeta js

- Descripción: contiene los elementos js que no sean catalogados como controladores o como modelos pero que de igual forma sirven a las vistas.

---

### Nombre: reservaVuelos.js

- - Descripción: archivo que obtiene parámetros de vuelos.html, que son usados para mostrar mensaje de sweetAlert, también pasa parámetros al carrito para que muestre monto y destino según la elección del usuario, un formulario de validación para evitar espacios en blanco. 

- Archivos HTML asociados: reservaVuelos.html y vuelos.html

- Funcionalidades: validar y mostra datos seleccionados por el usario

- Elementos que manipula: id="destino", id="precio", id="horaSalida", id="horaLlegada", id="duracion", id="escalas", id="totalCarrito", class="needs-validation", id="nombreUsuario".

- Controlador asociado: ninguno.

---

### Nombre: vuelos.js

- Descripción: controlo el flujo de como se muestran los destinos, tambien evita enviar el formulario incompleto, impidiendo que se borren los datos o que la pagina se actualice al intentar enviar el formulario, previene seleccion de fechas pasadas, ontiene párametro ciudad de origen, para mostrarlo en los acordeónes.

- Archivos HTML asociados: vuelos.html

- Funcionalidades: validar campos requeridos, restricción de fechas, mostrar acordeón según selección del usuario

- Elementos que manipula: id="fecha",  id="fechaRegreso", id="formularioVuelos", class=.resultado-vuelo, class="activo", id="resultadoFrancia", id="resultadoTokio",id="resultadoRio", id="resultadoSanJose", id="resultadoCusco", id="resultadoGroenlandia", class="validarOrigen".

- Controlador asociado: niguno.

---

## Carpeta Models

- Descripción: contiene modelos que los controladores tomarán como información base para validaciones y acciones a eventos.

---

### Nombre: modeloDashboard.json

- Descripción: archivo que contiene los datos base para la correcta generación de gráficos y son llevados al controlador por medio del modelo modeloDashboard.js.

- Funcionalidad: almacenar datos base para generación de métricas y gráfico.

- Modelo asociado: modeloDashboard.js

---

### Nombre: modeloDashboard.js

- Descripción: archivo que transporta los datos base para el dashboard y métricas desde el modelo modeloDashboard.json hasta el controlador controladorDashboars.js.

- Funcionalidad: solicitar los datos para el dashboard y calcular las métricas.

- Controlador asociado: controladorDashboard.js.

---

### Nombre: modeloDestino.js

- Descripción: archivo que contiene los datos base de los destinos turísticos (nombre, descripción, precio, categoría e imagen) para su renderizado y filtrado por medio del controlador controladorDestinos.js.

- Funcionalidad: almacenar el arreglo de destinos y proveer la lógica para consultar y filtrar los datos según la categoría seleccionada.

- Métodos o funciones principales: obtenerDestinos(categoria) (función exportada que retorna la lista completa de destinos o un arreglo filtrado por categoría).

- Controlador asociado: controladorDestinos.js.

---

### Nombre: modeloLogin.json

- Descripción: archivo que contiene los datos base para la validación del login del usaurio y son llevados al controlador por medio del modelo modeloLogin.js.

- Funcionalidad: almacenar datos base para la validación del login.

- Modelo asociado: modeloLogin.js

---

### Nombre: modeloLogin.js

- Descripción: archivo que transporta los datos base para la validación de credenciales en el login desde el modelo modeloLogin.json hasta el controlador controladorLogin.js.

- Funcionalidad: solicitar los datos para la validación del login.

- Controlador asociado: controladorLogin.js.

---

## Carpeta Controllers

- Descripción: contiene los controladores que luego tomarán los modelos para responder a eventos o peticiones realizadas en las vistas.

---

### Nombre: controladorDashboard.js

- Descripción: recibe los datos que ya se han pedido en el modelo controladorDashboard.js desde el modelo controladorDashboard.json y genera los gráficos.

- Archivos HTML asociados: dashboard.php

- Funcionalidades:

   - Genera el gráfico mediante su renderización en la vista dashboard.php y los datos respectivos los obtiene desde el modelo modeloDashboard.js.
   - Actualiza y reescribe el progreso de millas acumuladas y monto ahorrado desde que se adquirió la membresía premium en campos específicos.

- Elementos que manipula:

   - graficoMillas: id ubicado en dashboard.php, se usa para apuntar a su canvas y poder generar el gráfico.
   - textoMillas: id ubicado en dashboard.php, se usa para reemplazar su contenido con la representación de millas acumuladas.
   - textoAhorro: id ubicado en dashboard.php, se usa para reemplazar su contenido con el monto ahorrado el cual se obtiene desde el controlador llamado modeloDashboard.js.

Modelo asociado: modeloDashboard.js

---

### Nombre: controladorDestino.js

- Descripción: controlador encargado de gestionar la carga dinámica de las tarjetas de destinos y la lógica de filtrado por categoría en destinos.html tomando como base los datos obtenidos desde modeloDestinos.js.

- Archivos HTML asociados: destinos.html

- Funcionalidades: Carga inicial de la totalidad de los destinos al ingresar a la página mediante la consulta al módulo modeloDestinos.js.
Renderiza dinámicamente en la vista las tarjetas HTML con la información correspondiente a cada destino (imagen, nombre, descripción, precio y botón de detalles).
Gestiona los eventos de clic en los botones de filtro para alternar la clase activa (boton-activo) y filtrar los destinos según la categoría seleccionada.

Elementos que manipula:
- grillaDestinos: id ubicado en destinos.html, se utiliza para limpiar e inyectar dinámicamente la estructura HTML de las tarjetas de destinos.
- .btn-filtrar: clase aplicada a los botones en destinos.html, se utiliza para escuchar el evento de filtrado, extraer el atributo data-filtro y cambiar el estado visual activo.


Modelo asociado: modeloDestinos.js

---

### Nombre: controladorLogin.js

- Descripción: recibe los datos que ya se han pedido en el modelo controladorLogin.js desde el modelo controladorLogin.json y procede a ejecutar activar alertas y redirigir según sea el caso

- Archivos HTML asociados: login.html

- Funcionalidades:

   - Capturar el evento submit generado al enviar el formulario de id "formLogin" evitando que se envíe de forma predeterminada mediante event.preventDefault().
   - Limpieza y filtro de espacios vacíos mediante el uso de trim() en los inputs de usuario y contraseña, además de implementar una alerta con sweetalert en caso de detectarse.
   - Al validar todo lo anterior arroja una alerta indicando que los datos son correctos y redirije a la vista dashboard.php.

- Elementos que manipula:

   - usuario, id ubicado en la vista login.html y lo emplea para leer el valor ingresado en el input de nombre de usuario.
   - contrasena, id ubicado en la vista login.html y lo emplea para leer el valor ingresado en el input de contraseña.
   - formLogin, id ubicado en la vista login.html y lo emplea para escuchar el evento submit para interceptar el envío.

Modelo asociado: modeloLogin.js

---
