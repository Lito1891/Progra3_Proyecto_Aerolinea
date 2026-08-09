// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


//para evitar fechas anteriores y que la fecha seleccionada como de regreso tenga restriccion de que tiene que ser mayar a un dia de diferencia
const hoy = new Date().toISOString().split("T")[0];

const fechaIda = document.getElementById("fecha");
const fechaRegreso = document.getElementById("fechaRegreso");

// No permitir fechas anteriores a hoy
fechaIda.min = hoy;
fechaRegreso.min = hoy;

// La fecha de regreso no puede ser anterior a la fecha de ida
fechaIda.addEventListener("change", function () {
    fechaRegreso.min = fechaIda.value;
});


//para esconder los paises
document.getElementById("formularioVuelos").addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener la ciudad seleccionada
    const destino = document.getElementById("destino").value;

    // Ocultar todos los resultados
    const resultados = document.querySelectorAll(".resultado-vuelo");

    resultados.forEach(function(resultado) {
        resultado.classList.remove("activo");
    });

    // Relacionar cada ciudad con su sección
    const secciones = {
        paris: "resultadoFrancia",
        tokio: "resultadoTokio",
        rio: "resultadoRio",
        sanJose: "resultadoSanJose",
        cusco: "resultadoCusco",
        groenlandia: "resultadoGroenlandia"
    };

    // Obtener la sección correspondiente
    const seccion = document.getElementById(secciones[destino]);

    // Mostrarla
    if (seccion) {
        seccion.classList.add("activo");

        // Desplazarse hasta ella
        seccion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

});


