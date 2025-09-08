$(document).ready(function () {

    // al hacer clic en el botón 'agregar' se añaden elementos a la lista.
    $('#boton').click(function () {

        let input = $('#input').val();

        $('#ul').append(`<li class='lista'>${input} <button class="button">eliminar</button></li>`);
        input = $('#input').val('');

        // al hacer clic en el botón 'eliminar' se elimina ese elemento específicamente.
        $('.button').click(function () {
            $(this).parent().remove() // parent() = es el padre de ese botón creado, en este caso la lista <li>
        });
    });
});

/*  Teacher's example:

    $('#boton').click(functioin () { 

        $('#ul').append(`<li class="eliminar">${input}</li>`);

        $('.eliminar').dblclick(function (){ 
            $(this).css({
                'text-decoration': 'line-through',
                'color': 'red'        
            }).fadeOut(1200);    
        });
    });

*/


