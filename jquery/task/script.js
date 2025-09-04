$(document).ready(function(){

    $('#boton').click(function(){

        let input = $('#input').val();

        $('#p2').append(`<li>${input}</li>`);
    });
});