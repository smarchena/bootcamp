// Este es un comentario de una sóla línea

/* 
Este es
un comentario
multilínea
*/

// ACCERDER A UN ELEMENTO MEDIANTE SU ID

var edad = document.getElementById("input_edad");
alert(edad.type);

var my_div = document.getElementById("cualquier_cosa");
alert(my_div.className);

var parr = document.getElementById("parrafo");
alert(parr.style.color);

parr.style.color = "blue";
parr.innerText = "Ahora dice otra cosa";

//PARA CAPTURAR UN EVENTO:
// SELECCIONAMOS EL ELEMENTO
var p = document.getElementById("parrafo");

// ESCUCHAR EL EVENTO QUE NECESITAMOS (Click)
p.addEventListener("click", function(){
    alert('Hiciste click en el elemento');
    var suma = 1 + 3;
    alert('La suma es ' + suma)

});

// EJERCICIO; Hacer un botón y al hacer clic se muestre un console log mostrando un texto

var boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("Usted es el ganador por hacer click en el botón!! ;) ");    
});


// EJEMPLO 2

var btn = document.getElementById('boton2');
var input = document.getElementById('nombre');

btn.addEventListener("click", function(){    
    var valor_input = input.value;
    alert('El dato ingresado es: ' + valor_input.toUpperCase());
    input.value = "";    
});

// EJERCICIO 2: CREAR DOS INPUTS Y UN BOTÓN. AL HACER CLIC EN EL BOTÓN SUMAR LOS VALORES DE LOS INPUTS.

var numero1 = document.getElementById('number1');
var numero2 = document.getElementById('number2');
var botonazo = document.getElementById('boton3');

botonazo.addEventListener("click", function(){
    var suma2 = parseFloat(numero1.value) + parseFloat(numero2.value);
    alert('La suma de los números ingresados es: ' + suma2);
});

// ejemplo del profesor:
function sumar_numeros(a, b){
    var resultado = parseFloat(a) + parseFloat(b);
    return resultado;
}

botonazo.addEventListener("click", function(){
    alert(sumar_numeros(numero1.value, numero2.value));
});


//Proyecto N°2 
/*
a)  Hacer una calculadora con HTML + CSS + JS. Utilizar funciones (para las operaciones 
    addEventListener.
    Mostrar el resultado de la operación en un h4( document.getElementById("id_h4"));
    h4.innerText = "hola qué tal"

b)  Según el texto ingresado por el usuario (en un input), y la opción correspondiente, mostrar:
    - dicho texto en mayúscula.
    - dicho texto en minúscula.
    - cantidad de caracteres.

    Mostrar en un h4 también.

*/