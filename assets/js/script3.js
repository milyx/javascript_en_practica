//Ejercicio 3

function sumar() {
    const num1 = document.getElementById("valor1").value;
    const num2 = document.getElementById("valor2").value;
  
    let resultado = parseInt(num1) + parseInt(num2);
    if (resultado < 0) {
      resultado = 0;
    }
    const respuesta = (document.getElementsByClassName("resultado")[0].innerHTML =
      resultado);
  }
  
  function restar() {
    const num1 = document.getElementById("valor1").value;
    const num2 = document.getElementById("valor2").value;
  
    let resultado = parseInt(num1) - parseInt(num2);
    if (resultado < 0) {
      resultado = 0;
    }
    const respuesta = (document.getElementsByClassName("resultado")[0].innerHTML =
      resultado);
  }
  