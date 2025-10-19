/* Inicio Programa
	Leer televisor
	Si televisor esta disponible
	Mostrar "Comprar"
	Sino
	Mostrar "Articulo no disponible"
	Fin Si
Fin Programa

-------------------------------------------------------------------------------------------------

Algoritmo = una secuencia de pasos, lógica, finita, ordenada (ej: una receta)

Realizar = pasos para comprar un producto en MercadoLibre
Inicio
	1. Ingresar a la página: www.mercadolibre.com
	2. Buscar el producto
    3. Si existe el producto
		3.1 Ingresar en el detalle del producto
		3.2 Hacer clic en el botón COMPRAR
		3.3 Si estamos logueados
			3.3.1 Completar formulario de compra
			3.3.2 Seleccionamos método de pago
			3.3.3 Confirmar compra
			3.3.4 FIN
	4. Sino existe el producto
		4.1 Buscar otro producto similar
		4.2 Repetir punto 3

Fin

--------------------------------------------------------------------------------------------------
Ejercicio: Pasos necesarios para realizar una reserva en el restaurante más solicitado de Colombia.

Inicio
	1. Ingresar a la página del restaurante.
	2. Buscar el número telefónico de contacto.
	3. Contactar con el restaurante.
	4. Reservar una mesa para una fecha.	
	5. Si la fecha está disponible
		5.1 Realizar la reserva.
		5.2 Realizar pago de ser necesario.
	6. Sino hay fecha disponible
		6.1 Buscar otra fecha cercana.
		6.2 Si encuentra una fecha a su gusto
			6.2.1 Realizar paso 5.1
		6.3 Sino encuentra fecha a su gusto
			6.3.1 No reservar mesa en el restaurante.
		6.4 Fin Si
Fin
*/

var apellido;
var edad;
var correoElectronico;
var nombre;

edad = 34;
nombre = 25;

var numero;
numero = 1;

if (numero < 3){
    alert('El número es menor a 3');
}else{
	alert('el número es mayor a 3');
}

var texto;
texto = 'hola';

if (texto == 'hola'){
    alert('El texto es HOLA');
}else{
    alert('El número es mayor a 3');
}


if (numero == 2){
	alert('El número es igual a 2');
}else if(numero ==3){
	alert('El número es igual a 3');
}else if(numero > 3){
	alert('El número es más grande que 3');
}

// ES LO MISMO QUE SI DIGO QUE:
if (numero == 2){
	alert('El número es igual a 2');
}else{
	if(numero ==3){
  alert('El número es igual a 3');
	}else{
  	if(numero > 3){
    alert('El número es más grande que 3');
    }
  }
}

// EJERCICIO: Mostrar un alert cuando número = 44 y texto = a chau.
var numero = 44;
var texto = 'chau';

if(numero == 44){
	alert('El número es igual a 44');
}

if(texto == 'chau'){
  	alert('El texto es "chau"');
}

//OPCION 1:
if(numero == 44){
    if(texto == 'chau'){
        alert('El número es igual a 44 y el texto es igual a "chau"');
    }
}else{
    alert('No son iguales.');
}

// MENÚ DE SOPAS
var texto = prompt('Ingrese el día de la semana para saber el menú de sopas:').toLowerCase();
switch (texto) {
  case 'lunes':
    alert('La sopa del lunes es de: Mondongo');
    break;
  case 'martes':
    alert('La sopa del martes es de: Pescado');
    break;
  case 'miercoles':
    alert('La sopa del miércoles es de: Pollo');
    break;
  case 'jueves':
    alert('La sopa del jueves es de: Verduras');
    break;
  case 'viernes':
    alert('La sopa del viernes es de: Lentejas');
    break;
  case 'sabado':
    alert('La sopa del sábado es de: Res');
    break;
  case 'domingo':
    alert('La sopa del domingo es de: Sopa de fideo');
    break;
  default:
    alert('Día no válido');
}

//Según 2 variables, intercambia los valooes de ambas y mostrarlos en un alert.
var a = 1;
var b = 10;
var c = a;

a = b;
b = c;
alert('El nuevo valor de "a" es: '+ a + ' y el nuevo valor de "b" es: ' + b);

/* Hacer una calculadora que segun dos números realice operaciones matemáticas correspondientes:(+,-,*,/)
	y muestre el resultado con un alert. [con numero1 y numero2] PAUTA: prompt('Ingrese el primer número:') */ 
	
alert('***	Bienvenido a su calculadora digital ;)	***');
var a = parseFloat(prompt('Ingrese primer número a operar:'));
var b = parseFloat(prompt('Ingrese segundo número a operar:'));
var operation = prompt('Ingrese el signo correspondiente de la operación a realizar: (+,-,*,/)');
var resul; 

if(operation == '+'){
	resul = a + b;
	alert('El resultado de la suma es: ' + resul);
}else if(operation == '-'){
	resul = a - b;
  	alert('El resultado de la resta es: ' + resul);
}else if(operation == '*'){
	resul = a * b;
   	alert('El resultado de la multiplicación es: ' + resul);
}else if(operation == '/'){
	if(b == 0){
		alert("El resultado es indeterminado.");
	}else{
		resul = a / b;
		alert('El resultado de la división es: ' + resul);
		}    			
}else if(operation !== '+','-','*','/'){
	alert('No es un signo correspondiente.');
}

// Ingresar 3 números y mostrar por alert cual es mayor y cuál es el menor.

let a = parseFloat(prompt('Ingrese un número: '));
let b = parseFloat(prompt('Ingrese un número: '));
let c = parseFloat(prompt('Ingrese un número: '));

if(a>=b){
	if(b>=c){
		alert('El número mayor es: ' + a + ' y el número menor es: ' + c);
	}else{
		alert('El número mayor es: ' + a + ' y el número menor es: ' + b);
	}
}else if(b>=c){
	if(c>=a){
		alert('El número mayor es: ' + b + ' y el número menor es: ' + a);
	}else{
		alert('El número mayor es: ' + b + ' y el número menor es: ' + c);
	}
}else if(c>=b){
	if(b>=a){
		alert('El número mayor es: ' + c + ' y el número menor es: ' + a);
	}else{
		alert('El número mayor es: ' + c + ' y el número menor es: ' + b);
	}
}



