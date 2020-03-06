window.onload = function() {
  //Prevenir el uso de tecla enter
  // window.addEventListener(
  //   "keypress",
  //   function(event) {
  //     if (event.keyCode == 13) {
  //       event.preventDefault();
  //     }
  //   },
  //   false
  // );
 //Tiempo

 var tiempoTotal = 10;

  //Capturar evento menu
 
  document
    .getElementById("botonMenu")
    .addEventListener("click", ocultarMostrar);

  function ocultarMostrar() {
    let menu = document.getElementById("menu");
    let juego = document.getElementById("juego");
    let pantallaPos = document.getElementById("posJuego");
    menu.style.display = "none";
    juego.style.display = "block";

    //Cuenta atras
    window.setInterval(function() {
      let cuentaAtras = document.getElementById("cuentaAtras");
      tiempoTotal -= 1;
      cuentaAtras.innerHTML = tiempoTotal;
    }, 1000);

    //Tiempo de juego
    setTimeout(function() {
      juego.style.display = "none";
      pantallaPos.style.display = "block";
    }, 10000);
  }

 


  document.getElementById("volverAtras").addEventListener("click", actualizar);

  function actualizar() {
    location.reload(true);
  }

  document.getElementById("volverMenu").addEventListener("click", actualizar);

  //Capturar evento
  document.getElementById("boton").addEventListener("click", mover);

  //Funcion calculo de cordenada ramdom
  function getCordenada(min, max) {
    let cordenada = Math.floor(Math.random() * (max - min + 1) + min);
    return cordenada;
  }
  var contador = 0;
  // Funcion de movimiento
  function mover() {
    let cordenada1 = getCordenada(0, 320);

    let cordenada2 = getCordenada(0, 320);
    document.getElementById("boton").style.left = cordenada1 + "px";
    document.getElementById("boton").style.top = cordenada2 + "px";
    contador++;
    cuentaPuntos = document.getElementById("contador");
    cuentaPuntos.innerHTML = contador;
  }
};
