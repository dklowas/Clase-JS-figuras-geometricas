// Connect Js with HTML , Steps:
// 1. Connect input with label
// 2. puts onclick in your commands if the button and call it function in this page

// triangle fuction calculating
function perimetrocuadrado(lado) {
  return lado * 4;
}

function areacuadrado(lado) {
  return lado * lado;
}

// Function of the calculating permimetro button
function calcularPerimetroFunc() {
  var input = document.getElementById("input-cuadrado-user");
  var value = input.value;

  var perimetro = perimetrocuadrado(value);
  alert(perimetro);
}

// Function of the calculating Area button
function calcularAreaFunc() {
  var input = document.getElementById("input-cuadrado-user");
  var value = input.value;

  var area = areacuadrado(value);
  alert(area);
}
// Function of the calculating TRIANGLE

function perimetrodetriangulo(lados, base) {
  return (suma = parseInt(lados) + parseInt(base));
}

function areadetriangulo(altura, base) {
  return (altura * base) / 2;
}

// functions for buttons

function calcularPerimetroFunctriangulo() {
  var lados = document.getElementById("ladosdetriangulo");
  var ladovalue = lados.value;
  var base = document.getElementById("basetriangulo");
  var basevalue = base.value;

  var perimetro_triangulo = perimetrodetriangulo(ladovalue, basevalue);
  alert(perimetro_triangulo);
}

function calcularAreaFunctriangulo() {
  var altura = document.getElementById("alturatriangulo");
  var alturavalue = altura.value;
  var base = document.getElementById("basetriangulo");
  var basevalue = base.value;

  var area_triangulo = areadetriangulo(alturavalue, basevalue);
  alert(area_triangulo);
}
