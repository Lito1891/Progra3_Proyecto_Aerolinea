//modelo para traer los datos para el gráfico

//función para traer los datos del json con Ajax
function obtenerDatosDashboard(){
    //retorna la petición Ajax para que quien la use pueda encadenar .done()
    return $.ajax({
        url: "../Models/modeloDashboard.json",
        //indica de dónde traerá los datos

        type: "GET",
        //indica el tipo de petición

        dataType: "json"
        //indica el tipo de dato que se va a traer
    });
}

//función para calcular las millas que faltan para el premio
function calcularMillasFaltantes(datosMillas){
    return datosMillas.millasTotales - datosMillas.millasAcumuladas;
}