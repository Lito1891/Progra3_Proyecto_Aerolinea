// ================================//
//      VALIDACIÓN DE FECHAS       //
// ================================//

//new Date() crea un objeto que contiene fecha y hora actuales
//.toISOString() convierte la fecha a un formato estándar que se llama ISO
//.split("T") separa texto, porque obtenemos fecha y hora, 
//en nuestro caso solo requerimos la fecha por eso pedimos la posicio[0]
//para evitar fechas anteriores y que la fecha seleccionada como de regreso tenga restriccion de que tiene que ser mayor a un día de diferencia
const hoy = new Date().toISOString().split("T")[0];//

const fechaIda = document.getElementById("fecha");//se declara variable para obtener fecha de ida atraves del id fecha
const fechaRegreso = document.getElementById("fechaRegreso");//se declara variable para obtener fecha de regreso atraves del id fechaRegreso

// No permitir fechas anteriores a hoy
//lo podemos interpretar como fecha de ida es minimo igual a hoy, y fecha de regreso es minimo igual a hoy
fechaIda.min = hoy;
fechaRegreso.min = hoy;

// La fecha de regreso no puede ser anterior a la fecha de ida
fechaIda.addEventListener("change", function () {//se dispara evento
    fechaRegreso.min = fechaIda.value;//y esto se traduce asi, fecha de regreso minimo es igual a fecha de ida con con valor que tenga
});                                   //ejemplo, si tenemos 10/8/2026 como fecha de ida, fecha regreso puede ser igual a ese valor.



// ===============================//
//     VALIDACIÓN DEL FORM        //
// ===============================//
//variable para guardar HTML que tenga el elemento "formularioVuelos"
const formularioVuelos = document.getElementById("formularioVuelos");

formularioVuelos.addEventListener('submit', event => {//dispara evento de enviar formulario

    if (!formularioVuelos.checkValidity()) {// Comprobamos si los campos son válidos, con la ayuda del "required"

        
        event.preventDefault();//se evita el comportamiento normal de pagina, ejemplo que se actualice la pagina y se pierdan datos que se ingresaron previamente ingresamos en los inputs
        event.stopPropagation();//previene que se propague el evento, en este caso serio evento 'submit', event =>

        // Activa los estilos de validación de Bootstrap ejemplo si el campo esta correcto lo pondra de color verde, sino sera de color rojo
        formularioVuelos.classList.add('was-validated');

        return;
    }

    //se evita el comportamiento normal de pagina, ejemplo que se actualice la pagina y se pierdan datos que se ingresaron previamente ingresamos en los inputs 
    event.preventDefault();

    // Activa los estilos de validación de Bootstrap ejemplo si el campo esta correcto lo pondra de color verde, sino sera de color rojo
    formularioVuelos.classList.add('was-validated');

    //variable para guardar HTML que tenga el elemento "destino"
    const destino = document.getElementById("destino").value;

    //busca todos los elementos que tengan la clase "resultado-vuelo" y guárdalos en resultados
    //querySelectorAll() Busca todos los elementos que coincidan con esto (".resultado-vuelo")
    const resultados = document.querySelectorAll(".resultado-vuelo");

    //recorremos la variable resultados y les quita la clase css activo, es lo que permite que el acordeón se mantenga oculto hasta que se seleccione 
    // según el usuario lo desee
    //resultado => representa el elemento que estamos procesando en cada vuelta, ejemplo resultado = París, asi de manera sucesiva
    //classList nos permite trabajar con las clases CSS de ese elemento.
    //remove("activo") quita la clase activo del elemento
    resultados.forEach(resultado => {
        resultado.classList.remove("activo");
    });

    // relacionar cada destino con su sección, en el <select> se asigno un value para cada opción, ejemplo value="paris"
    // esto esta relacionado con el id que se le dio a cada país ejemplo "resultadoFrancia"
    const secciones = {
        paris: "resultadoFrancia",
        tokio: "resultadoTokio",
        rio: "resultadoRio",
        sanJose: "resultadoSanJose",
        cusco: "resultadoCusco",
        groenlandia: "resultadoGroenlandia"
    };

    // obtener la sección correspondiente a cada elemento
    // esta línea busca automáticamente la sección HTML que corresponde al destino que seleccionó el usuario
    const seccion = document.getElementById(secciones[destino]);
    const ciudadOrigen = document.getElementById("validarOrigen").value;// se asigna variable para almacenar parametro del lable ciudad de origen

    //recorre todas las clases con "origenVuelo" y pasa el parametro a cuidadOrigen
    document.querySelectorAll(".origenVuelo").forEach(function(elemento){
        elemento.textContent = ciudadOrigen;
    });

    // mostrar el resultado únicamente si el formulario es válido
    // aqui decimos que si seccion existe agregale la clase activo classList.add("activo")
    // seccion.scrollIntoView nos desplaza hasta que el elemento sea visible y lo hace automaticamente
    if (seccion) {
        seccion.classList.add("activo");
        seccion.scrollIntoView({
            behavior: "smooth",//hace el desplazamiento suavemente
            block: "start"//indica dónde se va  colocar el elemento cuando termine el desplazamiento, en este casi es al inicio
        });
    }

});
