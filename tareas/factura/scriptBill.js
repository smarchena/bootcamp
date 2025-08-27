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

    datos = `<ul>
    <li><strong>Fecha: </strong>${dateInfo.value}</li>
    <li><strong>Nombre: </strong>${name1.value} ${lastname.value}</li>
    <li><strong>Teléfono: </strong>${number.value}</li>
    <li><strong>Email: </strong>${email.value}</li><br>
    </ul>`
    
    items = `<strong>Cantidad: </strong>${input_cant.value} <strong>Descripción: </strong>${input_description.value} <strong>Precio: </strong> ${input_precio.value}`

    localStorage.setItem("nombres", datos);
    localStorage.setItem("items", items);

    cant.value = ''
    descrip.value = ''
    price.value = ''
});

recuperar.addEventListener("click", function(){
    h3.innerHTML = localStorage.getItem("nombres");
    h3_2.innerHTML = localStorage.getItem("items");

    name1.value = ''
    lastname.value = ''
    number.value = ''
    email.value = ''
    date.value = ''
});



