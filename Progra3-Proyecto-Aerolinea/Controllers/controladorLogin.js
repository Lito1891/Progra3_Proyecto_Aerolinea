$("#formLogin").on("submit", function(event){
//para escuchar el evento de submit cuando se mande el formulario
    
    event.preventDefault();
    //para evitar que el formulario se mande antes de poder validarse


    let usuarioIngresado = $("#usuario").val().trim();
    //variable que guarda el valor de lo ingresado en el campo de usuario de login
    //uso de trim() para eliminar espacios

    let contrasenaIngresada = $("#contrasena").val().trim();
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

    //pide los datos al modelo 
    obtenerDatosLogin().done(function(datos){

        //le pregunta al Modelo si las credenciales son válidas
        const esValido = validarCredenciales(datos, usuarioIngresado, contrasenaIngresada);

        //validación del usuario y contraseña del login
        if (esValido){
            //validación para corroborar que los datos

            Swal.fire({
                title: "Inicio de sesión exitoso",
                text: "Binvenido de nuevo",
                icon: "success"

            //se usa sweetalert generar alerta
            }).then(function(){
                window.location.href = "../Views/dashboard.php";
            //luego redirecciona a la página del dashboard al darle ok a la alerta del sweetalert
            });
            
        } else{

            Swal.fire({
                title: "Usuario o contraseña erróneos",
                text: "Por favor ingrese los datos correctos",
                icon: "error"
            });
            //se usa sweetalert generar alerta
        }
    });
});