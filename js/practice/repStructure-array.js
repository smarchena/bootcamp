// ESTRUCTURA DE REPETICIÓN (for)

var i;
for (i = 0; i <= 10; i = i++) {

}

// repita 10 veces un alert que diga hola
var i;
for (i = 0; i < 3; i++) {
  alert("Hola!! ;)");
}

/* Factorial de un número ej: 5! = 5*4*3*2*1 = 120
  El usuario va a ingresar un número y se debe calcular su factorial. */

var num = parseFloat(prompt('Ingrese un número: '));
var i;
var resultado = 1;

for (i = num; i >= 1; i--) {
  resultado = resultado * i;
}

alert('El resultado es: ' + resultado);

// WHILE 

var a = parseFloat(prompt('Ingrese un número: '));
var b = 1;

while (b <= a) {
  alert('Hola mundo ;) ');
  b++;
}

// Mismo ejercicio del factorial utilizando el while.

var a = parseFloat(prompt('Ingrese un número: '));
var resultado = 1;

while (a >= 1) {
  resultado = resultado * a;
  a--;
}

/* Pedir al usuario que ingrese la hora y saludarlo con un mensaje que diga: buen día,
    buenas tardes o buenas noches. */

var a = parseInt(prompt('Ingrese hora del día: [Formato 24h]'));
if (a < 12) {
  alert('Hola! Buenos días ;) ');
} else if (a <= 18) {
  alert('Hola! Buenas tardes ;) ');
} else if (a <= 24) {
  alert('Hola! Buenas noches ;) ');
} else if (a !== 1 - 24) {
  alert('No es una hora correcta.');
}

/* El usuario ingresa que desea calcular: área de un círcúlo ó área de un triangulo. */

var calculo = prompt('Para calcular el área de un círculo presione: A   Para calcular el área de un triángulo presione: B   ').toLowerCase();
var resultado;

if (calculo == 'a') {
  var r = parseFloat(prompt('Ingrese el radio del círculo: '));
  resultado = 3.1416 * r * r;
  alert('El área del círculo es: ' + resultado);

} else if (calculo == 'b') {
  var b = parseFloat(prompt('Ingrese la base del triángulo: '));
  var h = parseFloat(prompt('Ingrese la altura del triángulo: '));
  resultado = (b * h) / 2;
  alert('El área del triángulo es: ' + resultado);

} else if (calculo !== 'a', 'b') {
  alert('No es una opción correcta.');
}

/* Realizar un programa que el usuario ingrese el número de un mes (1-12) 
    e indique cuántos días tiene ese mes: */

var mes = prompt('Ingrese número de mes: ');

if (mes == 1, 3, 5, 7, 8, 10, 12) {
  alert('El mes' + mes + 'tiene 31 días.');
} else if (mes == 2) {
  alert('El mes' + mes + 'tiene 28 días');
} else if (mes == 4, 6, 9, 11) {
  alert('El mes' + mes + 'tiene 30 días');
}

/* Realizar un programa para una tienda de autos. Si el auto vendido es un Ford Fiesta, 
    tiene un descuento del 5%. Si es un FordFocus es de 10%.
    el usuario debe ingresar la marca y el modelo, y el programa debe mostrar el descuento aplicado.*/

var marca = prompt('Ingrese marca del auto a comprar: ').toLowerCase();
var model = prompt('Ingrese modelo del auto a comprar:').toLowerCase();

if (marca == 'ford') {
  if (model == 'fiesta') {
    alert('El Ford Fiesta tiene un descuento del 5%');
  } else if (model == 'focus') {
    alert('El Ford Focus tiene un descuento del 10%');
  }
} else if (marca !== 'ford') {
  alert('Esta marca no tiene descuentos en este momento.');
}

/* Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celsius 
  y el programa muestre un alert la temperatura en grados Farenheit. */

alert('Bienvenido al convertidor de temperaturas de grados Celsius a Farenheit ;) ');
var celsius = parseFloat(prompt('Ingrese el valor de la temperatura en grados Celsius: '));
var farenheit;

if (celsius == celsius) {
  farenheit = ((9 / 5) * celsius) + 32;
  alert('El resultado es: ' + farenheit + ' grados FarenHeit.');
} else if (celsius !== parseFloat) {
  alert('No es un grado de temperatura.');
}

/* El usuario ingresa un número se pide mostrar en diferentes alert que sean pares desde el 1 hasta 
    el número ingresado. [Para los pares se escribe módulo   (mod = 0 entonces 8 es par,
    si resultado ¡=0 entonces 8 es impar] [se una un ciclo for] */

var a = parseInt(prompt('Ingrese un número: '));
var i;

for (i = 1; i <= a; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}

// Mostrar utilziando un console.log la tabla del 9 hasta el 9x10

var tab = parseInt(prompt('Ingrese número: '));
var i;
var res;

for (i = 0; i <= 10; i++) {
  res = tab * i;
  console.log(tab + ' x ' + i + ' = ' + res);
}

// Con while y do while, realizar el ejercicio de la tabla de multiplicar.

//while 
var tab = parseInt(prompt('Ingrese número: '));
var i = 0;
var res;

while (i <= 10) {
  res = tab * i;
  console.log(tab + ' x ' + i + ' = ' + res);
  i++;
}

//do while
var tab = parseInt(prompt('Ingrese número: '));
var i = 0;
var res;

do {
  res = tab * i;
  console.log(tab + ' x ' + i + ' = ' + res);
  i++;
} while (i <= 10);

//*************************** ARRAY ***************************
var edad = 13;
var colores = ['rojo', 'azul', 'amarillo'];
var pares = [12, 26, 48, 30, 20, 10];

alert(colores[0]);
console.log(pares[3]);
console.log("tamaño del array pares = " + pares.length);
console.log("tamaño del array colores = " + colores.length);

var i;
for (i = 0; i < pares.length; i++) {
  console.log(pares[i]);
}

// Según un conjunto de 10 números, mostrar cuáles son impares utilizando un array.
var numeros = [12, 11, 78, 95, 45, 13, 32, 1, 63, 17524];
var i;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    console.log(numeros[i]);
  }
}

/* El usuario ingresa la cantidad de nombres que desea guardar, 
  y luego se pide mediante un prompt todos los nombres que desea guardaar y guardarlo en un array. */

var name = prompt('Ingrese la cantidad de nombres que desea guardar: ');
var i;
var data;
var res;

for (i = 0; i < name; i++) {
  data = prompt('Ingrese nombre a guardar: ');
  res = [data];
  console.log(res);
}

