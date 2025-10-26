// Escribo todo el código dentro de la función 
$(document).ready(function () {

    /* Antes sin jquery para seleccionar un elemento:
    document.getElementById('boton')  */

    $('#boton'); // con Jquery se selecciona por medio del id. (#)
    $('.texto'); // se selecciona por medio de la clase. (.)

    let contenido_h1 = $('.texto').text(); // puede ser .text() o .html()
    console.log(contenido_h1); // capturar el texto de la etiqueta h1 correspondiente con la clase text.

    // Es lo mismo que:
    var a = $('.texto').text(); // document.getElementByClassName('texto).innerText;
    var b = $('.texto').html(); // document.getElementByClassName('texto).innerHTML;
    console.log(a);
    console.log(b);


    /* EVENTOS:

    sin jquery:
    boton.addEventListener( function () {      }); */

    $('#boton').click(function () {
        console.log('Hiciste click en el botón.');
        $('.texto').css('color', 'blue');
        $('.texto').css('margin-left', '30px');

        /* Se puede hacer en una sola línea de la siguente manera:
        $('.texto').css('color','blue').css('margin-left','30px');        */

        // o de la siguiente manera: 
        $('.texto').css({
            'color': 'red',
            'margin-left': '100px',
        });

        // para cambiar el contenido del html:
        $('.texto').html('<strong>Otro texto</strong>');

        console.log($('#nombre').val());

        /* Propiedad en css:  (display: none;) esto permite desaparecer un elemento. */

        $('#parrafo').hide(); // esto permite desaparecer el elemento, y .show() para mostrarlo.
        $('#parrafo').show(); // permite mostrarlo.
        $('#parrafo').fadeOut(1000); // animación de desvanecimiento, el número entre parentesis indica la cantidad que demora la animación.
        $('#parrafo').fadeIn(1000); // permite aparecer el texto con animación.
        $('').append('') // en las primeras comillas se selecciona el elemento, y en las segundas es para agregar elementos. append = agregar.
    });

    console.log('Todas las etiquetas se cargaron.');
});



