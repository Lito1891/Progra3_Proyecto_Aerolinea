//controladores para genetar los gráficos en dashboard

//controladores para generar los gráficos en dashboard
$(document).ready(function () {

    //petición AJAX para traer los datos del dashboard desde el JSON
    $.ajax({
        url: "../Models/modeloDashboard.json",
        // para indicarle de dónde debe traer los datos
        type: "GET",
        //para indica el tipo de método

        dataType: "json",
        //para indicarle el tipo de dato que se va a recibir

        success: function(respuesta){
        //al tener éxito la petición jQuery entrega dos datos del json en objeto js

            const millasFaltantes = respuesta.datosMillas.millasTotales - respuesta.datosMillas.millasAcumuladas;
             // constante para representar lo que falta para el premio
            
            const contextoGrafico = document.getElementById("graficoMillas");
            // constante para buscar en el html el id de graficoMillas para pasarlo luego como contexto del canvas al chart para que sepa donde debe dibujarlo

            new Chart(contextoGrafico, {
                type: "doughnut", // gráfico de tipo dona
                data: {
                    labels: ["Millas acumuladas", "Millas faltantes"],
                    datasets: [{
                        label: 'Millas acumuladas para premio',
                        data: [respuesta.datosMillas.millasAcumuladas, millasFaltantes],
                        //datos en orden para aparecer

                        backgroundColor: ["#007bff", "#e9ecef"],
                        //colores del gráfico

                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,
                    cutout: "75%",
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            //título para el gráfico de millas
            $("#textoMillas").text(respuesta.datosMillas.millasAcumuladas + " / " + respuesta.datosMillas.millasTotales + " millas");
            // busca en el html el id textoMillas y lo llena con los datos recibidos por AJAX

            //segunda métrica a mostrar sobre ahorro por membresía
            $("#textoAhorro").text(respuesta.datosAhorro.moneda + respuesta.datosAhorro.montoAhorrado);
            // busca el elemento con el id textoAhorro y lo reemplaza con los datos recibidos por AJAX
        }
    });
});