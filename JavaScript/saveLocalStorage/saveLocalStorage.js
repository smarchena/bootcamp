var nom = document.getElementById("nombre");
var guardar = document.getElementById("guardar");
var recuperar = document.getElementById("obtener");
var h3 = document.getElementById("h3");

guardar.addEventListener("click", function(){

    localStorage.setItem("dato", nom.value);
    
});

recuperar.addEventListener("click", function(){
    h3.innerHTML = localStorage.getItem("dato");
});


/* Ejercicio:
Guardar todos los datos que el usuario va ingresando, y cuando el quiera,
mostrar dichos datos. */

var name1 = document.getElementById("name1");
var save = document.getElementById("save");
var restore = document.getElementById("restore");
var h3 = document.getElementById("h3_2");
var datos = "";

save.addEventListener("click", function(){
    datos = datos + "<br>" + name1.value;
    localStorage.setItem("saving", datos);
    name1.value = "";   
});

restore.addEventListener("click", function(){
    h3.innerHTML = localStorage.getItem("saving");
    
});

localStorage.removeItem("saving");