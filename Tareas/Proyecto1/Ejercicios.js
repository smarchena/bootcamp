/* Dado el array = [1,2,3,4,5,6]
•Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla. */

    var data = [1,2,3,4,5,6];
    var i = 0;

    while(i < data.length){
        console.log(data[i]);
        i++;
    }    

/*Iterar por todos los elementos dentro de un array utilizando for y mostrar en pantalla. */

    var data = [1,2,3,4,5,6];
    var i;

    for(i=0; i < data.length; i++){
        console.log(data[i]);
    }

/*Mostrar todos los elementos dentro de un array sumándole uno a cada uno [a cada valor]. */

    var data = [1,2,3,4,5,6];
    var i;

    for(i=0; i < data.length; i++){
        data[i] = data[i] + 1;        
    } console.log(data);

/*Generar una copia de un array, pero con todos los elementos incrementado en 12. */

    var data = [1,2,3,4,5,6];
    var CopyData = [];
    var i;

    for(i=0; i < data.length; i++){
        CopyData[i] = data[i] + 12;        
    } console.log(CopyData);

/*Calcular el promedio de la copia. */

    var CopyData = [13,14,15,16,17,18];
    var i;
    var sum = 0;
    var prom;

    for(i=0; i < CopyData.length; i++){
    sum = sum + CopyData[i];
    prom = sum/CopyData.length
    } console.log('El promedio es: ' + prom);

/*Dado un número ingresado por el usuario, crear la seie de Fibonacci.
Ej: si se ingresa #7, se debe mostrar 1 1 2 3 5 8 13 */

    var num = parseInt(prompt('Ingrese un número para la serie Fibonacci: '));
    var sum = 1;
    var cont = 0;
    var save;
    var i;

    if(num >= 0){
        for(i=0; i <= num; i++){            
            save = sum;
            sum = sum + cont;
            cont = save;
            console.log('La serie Fibonacci del número ingresado es: ' + sum);
        }
    }else {
        console.log('No es un número positivo.');
    }

// Segunda opción.

    var num = parseInt(prompt('Ingrese un número para la serie Fibonacci: '));
    var Fib = [];
    Fib [0] = 1;
    Fib [1] = 1;

    if(num >= 0){
        for(i=2; i < num; i++){
            Fib[i] = Fib[i-2] + Fib[i-1];
        }console.log('La serie Fibonacci del número ingresado es: ' + Fib);
    }else {
        console.log('No es un número positivo.');
    }

/* El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado.
    Ej: número ingresado = 5

    *
    ***
    *****
    *******
    *********
    *******
    *****
    ***
    *
 */
    var num = parseInt(prompt('Ingrese un número positivo: '));
    var i;
    var ast;

    for(i='*'; i <= num; i++){
        ast = i;  

    }
