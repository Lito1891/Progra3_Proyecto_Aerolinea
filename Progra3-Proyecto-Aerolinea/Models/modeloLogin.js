//modelo para traer datos y validación de los mismos

//función para traer los datos del json por medio de Ajax
function obtenerDatosLogin(){
    //retorna la petición AJAX para que quien la use pueda encadenar .then()
    return $.ajax({
        url: "../Models/modeloLogin.json",
        //para saber la ruta de donde traerá los datos

        type: "GET",
        //para saber el método, en este caso GET

        dataType: "json"
        //para indicar el tipo de dato que va a recibir
    });
}

//función que recibe los datos traídos del json y lo que el usuario ingresó en el formulario de login
function validarCredenciales(datos, usuarioIngresado, contrasenaIngresada){
    //la regla de negocio (cómo se decide si el login es válido) vive aquí, no en el controlador
    return usuarioIngresado === datos.usuarioLogin[0] && contrasenaIngresada === datos.contraLogin[0];
}