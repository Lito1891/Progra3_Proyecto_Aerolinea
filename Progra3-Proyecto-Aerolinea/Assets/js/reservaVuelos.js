// ================================//
//      OBTIENE DATOS DE URL       //
// ================================//

//URLSearchParams es un constructor que retorna un objeto de tipo URLSearchParams y nos permite trabajar con parametros de búsqueda de una URL.
//window.location retorna un objeto Location con la informacion actual del documento
//.search es una propiedad de window.location para obtener la parte de la URL que viene despues del signo? ejemplo "../Views/reservaVuelos.html?destino=París
// &precio=410.99"&horaSalida=14:50&horaLlegada=17:20&duracion=2h30m&escalas=0
const parametros = new URLSearchParams(window.location.search);
const destino = parametros.get("destino");//obtiene el parametro destino ejemplo "destino=París"
const precio = parseFloat(parametros.get("precio"));//obtiene el parametro precio ejemplo "precio=410.99"
const horaSalida = parametros.get("horaSalida");//obtiene el parametro horaSalida ejemplo "horaSalida=14:50"
const horaLlegada = parametros.get("horaLlegada");//obtiene el parametro horaLlegada ejemplo "horaLlegada=17:20"
const duracion = parametros.get("duracion");//obtiene el parametro duracion ejemplo "duracion=2h30m"
const escalas = parametros.get("escalas");//obtiene el parametro escalas ejemplo "escalas=0"


// ================================//
//   MOSTRAR DATOS EN EL CARRITO   //
// ================================//

// IF PARA MOSTRAR DESTINO EN LA SECCION DEL CARRITO
//en pocas palabras ejecuta esto, si recibí un destino, busque el elemento que tiene id="destino, y pon el destino"
if (destino) {document.getElementById("destino").textContent = destino;}

// IF PARA MOSTRAR PRECIO EN LA SECCION DEL CARRITO
//isNaN significa "is Not a Number", ! significa "NO", lo podemos interpretar "¿precio NO es un número?" entonces como precio si es un numero ejecutara el IF
//"Si el precio es un número, busca el elemento totalCarrito y muestra el precio con $ y dos decimales."
if (!isNaN(precio)) {document.getElementById("totalCarrito").textContent = "$" + precio.toFixed(2);}
//.textContent sirve para cambiar el texto del elemento
//.toFixed(2) es para que "precio" muestre dos decimales



// ===============================//
//     VALIDACIÓN DEL FORM        //
// ===============================//
// Busca todos los formularios en el HTML que tengan la clase '.needs-validation' y los guarda en la variable formulario
const formulario = document.querySelectorAll('.needs-validation');
//aqui vamos a recorrer cada formulario que encontremos
Array.from(formulario).forEach(form => {//foreach
    form.addEventListener('submit', event => {//dispara evento de enviar formulario
        
        if (!form.checkValidity()) {// Comprobamos si los campos son válidos, con la ayuda del "required"
            
            event.preventDefault();//se evita el comportamiento normal de pagina, ejemplo que se actualice la pagina y se pierdan datos que se ingresaron previamente ingresamos en los inputs
            event.stopPropagation();//previene que se propague el evento, en este caso serio evento 'submit', event =>
        } else {//este else es si el formulario si es valido hara lo siguiente
            
            event.preventDefault();//se evita el comportamiento normal de pagina, ejemplo que se actualice la pagina y se pierdan datos que se ingresaron previamente ingresamos en los inputs
            
            const nombre = document.getElementById("firstName").value;//declaramos variable para obtener nombre mediante su respectivo ID
            // Mostrar mensaje de pago exitoso mediante un sweetAlert
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
                `,//aqui se muestran los parametros que se enviaron atraves de la URL y que se obtuvieron previamente.
                icon: "success",//icono de exito check verde
                confirmButtonText: "Aceptar"//boton aceptar
                }).then(() => {//despues de mostrar el mensaje del sweetAlert hara esto otro
                window.location.href = "index.html";//redirecciona a la pagina de inicio .href hace referencia hacia que pagina redirecciona
            });
        }
        // Activa los estilos de validación de Bootstrap ejemplo si el campo esta correcto lo pondra de color verde, sino sera de color rojo
        form.classList.add('was-validated');
    });
});
