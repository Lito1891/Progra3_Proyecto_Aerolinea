// controladorDestinos.js
import { obtenerDestinos } from "../Models/modeloDestinos.js";

document.addEventListener("DOMContentLoaded", () => {
const contenedorGrilla = document.getElementById("grillaDestinos");
const botonesFiltro = document.querySelectorAll(".btn-filtrar");

  // 1. Función para renderizar dinámicamente las tarjetas en la Vista
const renderizarTarjetas = (destinos) => {
    contenedorGrilla.innerHTML = ""; // Limpiar el contenedor antes de renderizar

    destinos.forEach((destino) => {
    const tarjetaHTML = `
        <div class="destino-item" data-categoria="${destino.categoria}">
        <div class="destinoTarjeta">
            <div class="contenedor-foto-recorte"> 
            <img src="${destino.imagen}" alt="${destino.nombre}" />
            </div>
            <div class="cuerpo-tarjeta">
            <h5 class="nombre-destino">${destino.nombre}</h5>
            <p class="descripcion-destino">${destino.descripcion}</p>
            <div class="pie-tarjeta">
                <span class="precio-destino">$${destino.precio}</span>
                <a href="../Views/vuelos.html" class="btn-detalles text-decoration-none">Ver detalles</a>
            </div>
            </div>
        </div>
        </div>
    `;
    contenedorGrilla.innerHTML += tarjetaHTML;
    });
};

  // 2. Carga inicial de todos los destinos al entrar a la página
renderizarTarjetas(obtenerDestinos("todos"));

  // 3. Gestión de eventos de filtrado
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
    const botonActual = evento.currentTarget;
    const categoria = botonActual.getAttribute("data-filtro");

      // Actualizar los botones de filtro
    botonesFiltro.forEach((btn) => btn.classList.remove("boton-activo"));
    botonActual.classList.add("boton-activo");

      // Consultar datos al Modelo y actualizar la Vista
    const destinosFiltrados = obtenerDestinos(categoria);
    renderizarTarjetas(destinosFiltrados);
    });
});
});
