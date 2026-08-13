//Funciones y validaciones para el login

//función para validar el inicio de sesión
$.ajax({
    url: "../Models/modeloLogin.json",
    //para saber la ruta de donde traerá los datos

    type: "GET",
    //para saber el método, en este caso GET

    dataType: "json",
    //para indicar el tipo de dato que va a recibir

    success: function(datosRebotados){
        //al tener éxito la petición se entregan los dos datos del json en objeto js

        
        const usuarioLogin = datosRebotados.usuarioLogin;
        const contraLogin = datosRebotados.contraLogin;
        //para guardar los datos recibidos traídos en variables constantes

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

            //validación del usuario y contraseña del login
            if (usuarioIngresado === usuarioLogin[0] && contrasenaIngresada === contraLogin[0]){
                //validación para corroborar que los datos sean los ubicados en la posición 0 de los arreglos

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
    },
});