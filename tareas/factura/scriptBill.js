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
let h3_cant = document.getElementById("h3_cant");
let h3_cant_name = document.getElementById("h3_cant_name");
let h3_descrip_name = document.getElementById("h3_descrip_name");
let h3_precio_name = document.getElementById("h3_precio_name");
let guardar = document.getElementById("save");
let recuperar = document.getElementById("restore");
let datos = "";
let items = "";
let cantidad = "";
let descripcion = "";
let precio = "";

guardar.addEventListener("click", function(){

    datos = `<ul>
    <li><strong>Fecha: </strong>${dateInfo.value}</li>
    <li><strong>Nombre: </strong>${name1.value} ${lastname.value}</li>
    <li><strong>Teléfono: </strong>${number.value}</li>
    <li><strong>Email: </strong>${email.value}</li>
    </ul>`;
    nombreCantidad = `<strong>CANTIDAD</strong>`;
    nombreDescripcion = `<strong>DESCRIPCIÓN</strong>`;
    nombrePrecio = `<strong>PRECIO</strong>`;
    cantidad = `${cantidad} <br> ${input_cant.value}`;
    descripcion = `${descripcion} <br> -${input_description.value}`;
    precio = `${precio} <br> $${input_precio.value}`;
    let sumaCant = parseInt(cantidad) + parseInt(input_cant.value);
    let sumaPrice = parseInt(precio) + parseInt(input_precio.value);
    let totalPrice = sumaCant * sumaPrice;
    total = `Total a pagar: ${totalPrice}`

    localStorage.setItem("nombres", datos);    
    localStorage.setItem("nombreCantidad",nombreCantidad);
    localStorage.setItem("nombreDescripcion",nombreDescripcion);
    localStorage.setItem("nombrePrecio",nombrePrecio);
    localStorage.setItem("cantidad", cantidad);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("precio", precio);
    localStorage.setItem("precioTotal", total)

    cant.value = ''
    descrip.value = ''
    price.value = ''
});

recuperar.addEventListener("click", function(){
    h3.innerHTML = localStorage.getItem("nombres");   
    h3_cant.innerHTML = localStorage.getItem("cantidad");
    h3_descrip.innerHTML = localStorage.getItem("descripcion");
    h3_precio.innerHTML = localStorage.getItem("precio");
    h3_cant_name.innerHTML = localStorage.getItem("nombreCantidad");
    h3_descrip_name.innerHTML = localStorage.getItem("nombreDescripcion");
    h3_precio_name.innerHTML = localStorage.getItem("nombrePrecio"); 
    totalPrecio.innerHTML = localStorage.getItem("precioTotal");  

    name1.value = ''
    lastname.value = ''
    number.value = ''
    email.value = ''
    date.value = ''
});

localStorage.removeItem("cantidad")
localStorage.removeItem("descripcion")
localStorage.removeItem("precio")

