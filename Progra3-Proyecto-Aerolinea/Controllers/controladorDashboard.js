//controladores para genetar los gráficos en dashboard


document.addEventListener("DOMContentLoaded", function () {

    //Gráfico de millas acumuladas usando datosMillas del modelo para el dashboard
    
    const millasFaltantes = datosMillas.millasTotales - datosMillas.millasAcumuladas;
    // constante para representar lo que falta para el premio

    const contextoGrafico = document.getElementById("graficoMillas");//.getContext("2d");
    // constante para buscar en el html el id de graficoMillas para pasarlo luego como contexto del canvas al chart para que sepa donde debe dibujarse

    new Chart(contextoGrafico, {
        type: "doughnut", // gráfico de tipo dona
        data: {
            labels: ["Millas acumuladas", "Millas faltantes"],
            datasets: [{
                label: 'Millas acumuladas para premio',  
                data: [datosMillas.millasAcumuladas, millasFaltantes],
                //datos en orden para aparecer

                backgroundColor: ["#007bff", "#e9ecef"],
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
    document.getElementById("textoMillas").textContent = datosMillas.millasAcumuladas + " / " + datosMillas.millasTotales + " millas";
    // constante parabuscar en el html el id textoMillas

    // segundas métricas a mostrar sobre ahorro por membresía
    document.getElementById("textoAhorro").textContent = datosAhorro.moneda + datosAhorro.montoAhorrado;
    // busca el elemento con el id textoAhorro y lo reemplaza con los datos del controlador que son el símbolo de la moneda y el monto ahorrado
});