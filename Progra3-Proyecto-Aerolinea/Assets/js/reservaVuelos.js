// ================================
// DATOS DEL VUELO
// ================================
const parametros = new URLSearchParams(window.location.search);
const destino = parametros.get("destino");
const precio = parseFloat(parametros.get("precio"));
const horaSalida = parametros.get("horaSalida");
const horaLlegada = parametros.get("horaLlegada");
const duracion = parametros.get("duracion");
const escalas = parametros.get("escalas");

// ================================
// MOSTRAR DATOS EN EL CARRITO
// ================================

// Mostrar destino
if (destino) {document.getElementById("destino").textContent = destino;}

// Mostrar precio
if (!isNaN(precio)) {
document.getElementById("totalCarrito").textContent =
    "$" + precio.toFixed(2);}

// ================================
// VALIDACIÓN Y PAGO
// ================================
(() => {
'use strict';
// Buscar los formularios que utilizan validación Bootstrap
const forms = document.querySelectorAll('.needs-validation');
// Recorrer los formularios
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        // Comprobar si los campos son válidos
        if (!form.checkValidity()) {
            // Evitar el envío
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Evitar que la página se recargue
            event.preventDefault();
             // Obtener el nombre en el momento de realizar el pago
            const nombre = document.getElementById("firstName").value;
            // Mostrar mensaje de pago exitoso
            Swal.fire({
                title: "¡Pago realizado con éxito!",
                html: `
                    <b>Nombre:</b> ${nombre} <br>
                    <b>Destino:</b> ${destino} <br>
                    <b>Precio:</b> $${precio.toFixed(2)} <br>
                    <b>Hora de salida:</b> ${horaSalida} <br>
                    <b>Hora de llegada:</b> ${horaLlegada} <br>
                    <b>Duración:</b> ${duracion} <br>
                    <b>Escalas:</b> ${escalas} <br>
                    <b>Estado:</b> Pago confirmado
                `,
                icon: "success",
                confirmButtonText: "Aceptar"
                }).then(() => {
                window.location.href = "index.html";
            });
        }
        // Activa los estilos de validación de Bootstrap
        form.classList.add('was-validated');
    }, false);
});
})();