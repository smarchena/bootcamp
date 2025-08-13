let name1 = document.getElementById("name");
let lastname = document.getElementById("lastname");
let number = document.getElementById("number");
let email = document.getElementById("email");
let date = document.getElementById("dateInfo");
let cant = document.getElementById("input_cant");
let descrip = document.getElementById("input_description");
let price = document.getElementById("input_precio");
let h3 = document.getElementById("h3");
let h3_2 = document.getElementById("h3_2");
let guardar = document.getElementById("save");
let recuperar = document.getElementById("restore");
let image = document.getElementById("img");
let datos = "";
let items = "";

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




