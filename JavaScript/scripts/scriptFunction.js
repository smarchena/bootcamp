var a = 'Hola Mundo';
alert(a);


// CREO UNA FUNCIÓN
    function miFuncion(){
    var text = (prompt('Ingrese un texto:'));
        alert('El texo en mayúscula es: ' + text.toUpperCase());
        alert('El texto en minúscula es: ' + text.toLowerCase());
    }
    // Ejecutarla o llamarla o instanciarla
    miFuncion();

//Parámetros

    function mensaje(param1, param2){

        alert("El primer dato recibido es: " + param1);
        alert("El segundo dato recibido es: " + param2);

    }
    var a = 3;

    mensaje(a, "Carlos");

/* Sumar 2 númreos que ingrese el usuario por promt
Utilizar funciones con parámetros (los dos números)
los prompt van fuera de la función */

    var num1 = parseFloat(prompt("Ingrese primer número: "));
    var num2 = parseFloat(prompt("Ingrese segundo número: "));

    function suma(a, b){

        var sum = a + b;
        return sum;         

    }

  alert( suma(num1, num2) );

/* calculadora utilizando funciones, parámetros/argumentos, return
Operaiones válidas: suma, resta, multiplicación y división. Utilizar una única función */ 

    var num1 = parseFloat(prompt("Ingrese primer número: "));
    var num2 = parseFloat(prompt("Ingrese segundo número: "));
    var operator = prompt("Ingrese operador lógico: +,-,*,/");
    

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
                alert('Indeterminado.');
            }
        }
        return result;    
    }

alert ( resultado(num1, num2) );
alert('El resultado de la operación es: ' + resul);S


