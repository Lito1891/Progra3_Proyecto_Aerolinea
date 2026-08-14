//controladores para genetar los gráficos en dashboard

//controladores para generar los gráficos en dashboard
$(document).ready(function () {

    obtenerDatosDashboard().done(function(respuesta){
        //le pide los datos al modelo

        const millasFaltantes = calcularMillasFaltantes(respuesta.datosMillas)
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
        // busca en el html el id textoMillas y lo llena con los datos recibidos por Ajax

        //segunda métrica a mostrar sobre ahorro por membresía
        $("#textoAhorro").text(respuesta.datosAhorro.moneda + respuesta.datosAhorro.montoAhorrado);
        // busca el elemento con el id textoAhorro y lo reemplaza con los datos recibidos por Ajax
    });
});
