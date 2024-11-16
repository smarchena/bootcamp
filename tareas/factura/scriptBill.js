var name1 = document.getElementById("name");
var lastname = document.getElementById("lastname");
var number = document.getElementById("number");
var email = document.getElementById("email");
var date = document.getElementById("dateInfo");
var cant = document.getElementById("input_cant");
var descrip = document.getElementById("input_description");
var price = document.getElementById("input_precio");
var h3 = document.getElementById("h3");
var h3_2 = document.getElementById("h3_2");
var guardar = document.getElementById("save");
var recuperar = document.getElementById("restore");
var image = document.getElementById("img");
var datos = "";
var items = "";

guardar.addEventListener("click", function(){
    
    datos = "<br>" + "<strong></strong>" + "Fecha: " + dateInfo.value + "<br>" + 
    "Nombre: " + name1.value + "<br>" + 
    "Apellido: " + lastname.value + "<br>" +
    "Teléfono: " + number.value + "<br>" +
    "Email: " + email.value + "<br>";

    items = "<br>" + "CANTIDAD: " + input_cant.value + " DESCRIPCIÓN: " + input_description.value; 
    localStorage.setItem("nombres", datos);
    localStorage.setItem("items", items);
});

recuperar.addEventListener("click", function(){
    h3.innerHTML = localStorage.getItem("nombres");
    h3_2.innerHTML = localStorage.getItem("items");

});


    items = "<br>" + "CANTIDAD:" + "                " + "DESCRIPCION: "
    "<br>" + input_cant.value;
    localStorage.setItem("items", items);




