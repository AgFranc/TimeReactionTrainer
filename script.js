let tiempoCambioColor = null;

function cambiarColorRectanguloInferior() {
    const rectanguloInferior = document.getElementById("rectangulo-inferior");
    
    if (rectanguloInferior.style.backgroundColor === "rgb(253, 184, 108)") {
        rectanguloInferior.style.backgroundColor = "#47485b"; // Cambia el color a #47485b
    } else {
        tiempoCambioColor = new Date(); // Registra el momento del cambio de color
        rectanguloInferior.style.backgroundColor = "#fdb86c"; // Cambia el color a #fdb86c
    }
    
    // Genera un tiempo aleatorio entre 3 y 6 segundos (3000 a 6000 ms) para el próximo cambio de color
    const tiempoAleatorio = Math.random() * (6000 - 3000) + 3000;
    
    setTimeout(cambiarColorRectanguloInferior, tiempoAleatorio); // Llama a la función después de un tiempo aleatorio
}

const rectanguloInferior = document.getElementById("rectangulo-inferior");

rectanguloInferior.addEventListener("click", function() {
    if (rectanguloInferior.style.backgroundColor === "rgb(253, 184, 108)") {
        // Calcula el tiempo de reacción al hacer clic
        if (tiempoCambioColor) {
            const tiempoActual = new Date();
            const tiempoDeReaccion = tiempoActual - tiempoCambioColor;
            alert("Tiempo de reacción: " + tiempoDeReaccion + " ms");
        }
    }
});

// Inicia el primer cambio de color después de un tiempo aleatorio
const tiempoAleatorioInicial = Math.random() * (6000 - 3000) + 3000;
setTimeout(cambiarColorRectanguloInferior, tiempoAleatorioInicial);
