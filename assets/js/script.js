//Ejercicio 1

const form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;
  const patron = /[a-zA-Z]/gim;

  let check = true;

  if (patron.test(nombre)) {
  } else {
    document.querySelector(".error__nombre").innerHTML =
      "Ingrese un Nombre válido.";
    check = false;
  }
  if (patron.test(asunto)) {
  } else {
    document.querySelector(".error__asunto").innerHTML =
      "Ingrese un Nombre válido.";
    check = false;
  }
  if (patron.test(mensaje)) {
  } else {
    document.querySelector(".error__mensaje").innerHTML =
      "Ingrese un Nombre válido.";
    check = false;
  }

  if (check === true) {
    document.querySelector(".resultado").innerHTML =
      "Mensaje enviado con éxito.";
  }
});

//Ejercicio 2

function colorseleccionado(color) {
  document.getElementById("caja").style.backgroundColor = color;
}

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
