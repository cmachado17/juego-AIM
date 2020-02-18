window.onload = function() {
  
      //Prevenir el uso de tecla enter
       window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false); 
      //Capturar evento
      document.getElementById("boton").addEventListener("click", mover);
    };
//Funcion calculo de cordenada ramdom
    function getCordenada(min, max){
        let cordenada = Math.floor(Math.random()* (max-min +1)+min);
        return cordenada;
    } 
var contador=0;
// Funcion de movimiento
    function mover(){
        let cordenada1 = getCordenada(0, 320);

        let cordenada2 = getCordenada(0, 320);
document.getElementById("boton").style.left=cordenada1 + "px";
        document.getElementById("boton").style.top=cordenada2 + "px";
contador++;
  cuentaPuntos = document.getElementById("contador");
      cuentaPuntos.innerHTML = contador;
    }
