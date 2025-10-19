const prompt = require('prompt-sync')();
var a = 'Hola Mundo';
console.log(a);


// CREO UNA FUNCIÓN
    function miFuncion(){
    var text = (prompt('Ingrese un texto: '));
        console.log('El texo en mayúscula es: ' + text.toUpperCase());
        console.log('El texto en minúscula es: ' + text.toLowerCase());
    }
    // Ejecutarla o llamarla o instanciarla
    miFuncion();

//CREO OTRA FUNCIÓN
    function mensaje1(texto){
        console.log(texto);
    }
    let b = prompt('Ingrese texto: ');
    mensaje1('El texto ingresado es: ' + b);

//Parámetros

    function mensaje(param1, param2){

        console.log("\nEl primer dato recibido es: " + param1);
        console.log("El segundo dato recibido es: " + param2);

    }
    var a = 3;
    mensaje(a, "Carlos");

/* Sumar 2 númreos que ingrese el usuario por promt Utilizar funciones con parámetros (los dos números)
    los prompt van fuera de la función */

    var num1 = parseFloat(prompt("\nIngrese primer número a sumar: "));
    var num2 = parseFloat(prompt("Ingrese segundo número a sumar: "));

    function suma(a, b){

        var sum = a + b;
        return sum;  

    }
  console.log('El resultado de la suma es: ' + suma(num1, num2) );

/* Calculadora utilizando funciones, parámetros/argumentos, return
    Operaiones válidas: suma, resta, multiplicación y división. Utilizar una única función */ 

    var num1 = parseFloat(prompt("\nIngrese primer número: "));
    var num2 = parseFloat(prompt("Ingrese segundo número: "));
    var operator = prompt("Ingrese operador lógico: +,-,*,/: ");    

    function resultado(a, b){   
        
        var result;

        if(operator == '+'){
            result = a + b;
        }else if(operator == '-'){
            result = a - b;
        }else if(operator == '*'){
            result = a * b;
        }else if(operator == '/'){
            if(num2 > 0){
                result = a / b ;
            }else{
                console.log('Indeterminado.');
            }
        }else if(operator !== '+','-','*','/'){
            console.log('No es un operador lógico.');
        }
        return result;    
    }

     console.log ('El resultado de la operación es: ' + resultado(num1, num2) );
    // console.log('El resultado de la operación es: ' + result);

    /* Mismo ejercicio de sumar dos números */
    let primerDato = parseFloat(prompt('\nIngrese un número a sumar: '))
    let segundoDato = parseFloat(prompt('Ingrese segundo número a sumar: '))
    
    function sumatoria(parametro1, parametro2){
        let resultado3 = parametro1 + parametro2;
        console.log('El resultado de la suma es: ' + resultado3);              
    }
    sumatoria(primerDato, segundoDato);