document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los botones de filtro y las tarjetas de destinos
    const botones = document.querySelectorAll('.btn-filtrar');
    const tarjetas = document.querySelectorAll('.destino-item');

    // 2. Asignar el evento de clic a cada botón
    botones.forEach((boton) => {
        boton.addEventListener('click', (evento) => {
            const botonActual = evento.currentTarget;
            const categoriaSeleccionada = botonActual.getAttribute('data-filtro');

            // 3. Filtrar las tarjetas según la categoría seleccionada
            tarjetas.forEach((tarjeta) => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
                    tarjeta.style.display = ''; // Muestra la tarjeta
                } else {
                    tarjeta.style.display = 'none'; // Oculta la tarjeta
                }
            });

            // 4. Remover la clase activa de todos los botones y asignarla al botón presionado
            botones.forEach((btn) => btn.classList.remove('boton-activo'));
            botonActual.classList.add('boton-activo');
        });
    });
});