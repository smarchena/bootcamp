const prompt = require('prompt-sync')();

/* 
	Dado el array = [1,2,3,4,5,6]
	
	1.	Iterar por todos los elementos dentro de un array utilizando while y mostrarlo en pantalla.
	2. 	Iterar por todos los elementos de un array utilizando for y mostrarlo en pantalla.
	3. 	Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
	4.	Generar una copia de un array pero con todos los elementos incrementado en 12.
	5. 	Calcular el promedio de la copia.
*/

	let array = [1,2,3,4,5,6];

// 1.	
	console.log('[Punto 1] - while');
	let i = 0;

	while(i < array.length){
		console.log(array[i]);
		i++;	
	}
	
// 2. 
	console.log('[Punto 2] - for');
	let j;

	for(j = 0; j < array.length; j++){		
		console.log(array[j]);
	}

// 3.
	console.log('[Punto 3] - suma');
	let k;
	let sum;	
	let res = [];

	for(k = 0; k < array.length; k++){
		sum = array[k] + 1;
		res.push(sum);		
	}console.log(res);

// 4.
	console.log('\n[Punto 4] - incremento');
	let x;
	let mult;
	let total = [];

	for(x = 0; x < array.length; x++){
		mult = array[x] * 12;
		total.push(mult);
	}console.log(total);

// 5.
    console.log('\n[Punto 5] - promedio');
    let prom;
    let y;
    let incr = 0;

    for(y = 0; y < total.length; y++){
        incr = incr + total[y];
        prom = incr/total.length;        
    } console.log('El promedio del array es: ' + prom);

/* 
    1.  Dado un número ingresado por el usuario, crear la serie de Fibonacci.
        Ej: si el usuario ingresa 7, se debe mostrar 1 1 2 3 5 8 13

    2.  El usuario ingresa un número, se pide crear la siguiente pirámide (console.log)
        hasta dicho número ingresado.
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

// 1.    
		var num = parseInt(prompt('\nIngrese un número para la serie Fibonacci: '));
		var fib = [1,1];	

		if(num >= 0){
			for(i=2; i < num; i++){
			 fib[i] = fib[i-2] + fib[i-1];
			}console.log('La serie Fibonacci del número ingresado es: ' + fib);
		}else {
			console.log('No es un número positivo.');
		}

// 2. 
		console.log('\ntarea2_punto2');
	let numeroPiramide = parseInt(prompt('Ingrese un número crear pirámide: ')); 
	let caracter;
	let i2;
	let repeticion;
	numeroPiramide = numeroPiramide + numeroPiramide;	

	if(numeroPiramide > 0 ){
		//Lo hará 5 veces
		for(i2 = 1; i2 <= numeroPiramide; i2 = i2 +2){
			caracter = '*';
			// El número de asteriscos que hace en cada repetición
			for(repeticion = 1; repeticion < i2; repeticion++){
				caracter = caracter + '*';
			} console.log(caracter);
		}

		// Lo hará 5 veces
		for( i2 = numeroPiramide - 2; i2 > 1; i2 = i2 - 2){
			caracter = '';
			// el número de asteriscos que hace en cada repetición
			for(repeticion= 1; repeticion < i2; repeticion++){
				caracter = caracter + '*';
			}console.log(caracter);
		}
	}else{
		console.log('Debe ser un número mayor que 0');
	}







