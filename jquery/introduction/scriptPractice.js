// javascript
/*
let dato_input = document.getElementById('dato');
let boton = document.getElementById('boton');
let res = document.getElementsByClassName('resultado');

console.log(res[0].innerHTML)

boton.addEventListener('click', function () {
    res[1].innerHTML = dato_input.value;
});
*/

// jquery

$('#boton').click( function () {
    console.log( $(this) ) // sirve para hacer referencia al mismo elemento (botón)
    //$('.resultado')[1].text($('#dato').val());

    $('#lista').append(`<li>${$('#dato').val()} (Eliminar)</li>`) // añade elementos a una lista
    $('#lista').remove() //--> elimna ese elemento.
}); 

// localStorage en JQuery
localStorage.email = 'santiago@gmail.com'; // guardar un dato en el 'key' email
console.log(localStorage.email); // muestro el 'valor' de la key guardada (email)
// key = value
// nombre = 'santiago'

// localStorage en JS vanila
localStorage.setItem('edad', 27);
console.log( localStorage.getItem('edad'));
localStorage.clear(); // borra todas las key guardadas. (jquery & vanila)



