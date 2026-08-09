//Funciones y validaciones para el login

//función para validar el inicio de sesión
function validarLogin(){

    
    let usuarioIngresado = document.getElementById("usuario").value.trim();
    //variable que guarda el valor de lo ingresado en el campo de usuario de login
    //uso de trim() para eliminar espacios

    let contrasenaIngresada = document.getElementById("contrasena").value.trim();
    //variable que guarda el valor de lo ingresado en el campo de contraseña de login
    //uso de trim() para eliminar espacios

    //validación de campos vacíos en el login
    if (usuarioIngresado === "" || contrasenaIngresada === ""){
        //validación en la que se entra solamente si vienen vacías

        Swal.fire({
            title: "Datos faltantes",
            text: "Por favor ingrese todos los datos requeridos",
            icon: "info"
        });
        //se usa sweetalert generar alerta
        return;
        //para que llegue hasta acá la acción
    }

    //validación del usuario y contraseña del login
    if (usuarioIngresado === usuarioLogin[0] && contrasenaIngresada === contraLogin[0]){
        //validación para corroborar que los datos sean los ubicados en la posición 0 de los arreglos

        Swal.fire({
            title: "Inicio de sesión exitoso",
            text: "Binvenido de nuevo",
            icon: "success"
        });
        //se usa sweetalert generar alerta
    } else{

        Swal.fire({
            title: "Usuario o contraseña erróneos",
            text: "Por favor ingrese los datos correctos",
            icon: "error"
        });
        //se usa sweetalert generar alerta
    }

}

//evento que controla el envío del formulario
document.getElementById("formLogin").addEventListener("submit", function(event) {
    //escucha el evento cuando se le da a submit

    event.preventDefault();
    //evita que el formulario se mande antes de validarse

    validarLogin();
    //llama la variable cuando ya se hicieron todas las validaciones
    
});