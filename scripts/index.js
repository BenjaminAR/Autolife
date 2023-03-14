window.onload = function() {
    let numeroActual = 1; // Empieza en 1
    let contador2 = 1; // Empieza en 5 para el segundo contador
    let contador3 = 1; // Empieza en 10 para el tercer contador
    
    // Define una función para mostrar el siguiente número
    function mostrarSiguienteNumero() {
      if (numeroActual <= 15) {
        document.getElementById("timeRes").innerHTML = numeroActual;
        numeroActual++;
      } else {
        clearInterval(intervalo); // Detiene la ejecución de la función cuando llega al 15
      }
    }
    
    function mostrarSiguienteNumeroDos() {
        if (contador2 <= 6) {
          document.getElementById("timeAVG").innerHTML = contador2;
          contador2++;
        } else {
          clearInterval(intervaloDos); // Detiene la ejecución de la función cuando llega al 15
        }
      }


      function mostrarSiguienteNumeroTres() {
        if (contador3 <= 96) {
          document.getElementById("PorcentAverage").innerHTML = contador3;
          contador3++;
        } else {
          clearInterval(intervaloTres); // Detiene la ejecución de la función cuando llega al 15
        }
      }



    // Ejecuta la función cada segundo
    let intervalo = setInterval(mostrarSiguienteNumero, 100);
    let intervaloDos = setInterval(mostrarSiguienteNumeroDos, 150);
    let intervaloTres = setInterval(mostrarSiguienteNumeroTres, 20);
  }