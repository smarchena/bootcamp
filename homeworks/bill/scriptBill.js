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
let totalSumaCant = 0;
let totalSumaPrecio = 0;

guardar.addEventListener("click", function () {

    //Obtener valores actuales del input
    let cantVal = parseInt(input_cant.value);
    let priceVal = parseFloat(input_precio.value);
    let descVal = input_description.value;

    //Asegurarse de valores válidos: numéricos
    if (isNaN(cantVal) || isNaN(priceVal)) {
        alert('Por favor, ingresa valores numéricos válidos en cantidad y precio.');
        return;
    }

    //Acomular cantidad y precio total

    totalSumaCant = totalSumaCant + cantVal;
    totalSumaPrecio = totalSumaPrecio + (cantVal * priceVal);

    //Capturar información
    datos = `<ul>
    <li><strong>Fecha: </strong>${dateInfo.value}</li>
    <li><strong>Nombre: </strong>${name1.value} ${lastname.value}</li>
    <li><strong>Teléfono: </strong>${number.value}</li>
    <li><strong>Email: </strong>${email.value}</li>
    </ul>`;

    //Mostrar nombres de columnas
    nombreCantidad = `<strong>CANTIDAD</strong>`;
    nombreDescripcion = `<strong>DESCRIPCIÓN</strong>`;
    nombrePrecio = `<strong>PRECIO</strong>`;

    //Acomular en la lista

    cantidad = `${cantidad} <br> ${cantVal}`;
    descripcion = `${descripcion} <br> ${descVal}`;
    precio = `${precio}<br> $${priceVal}`;
    total = `<br><br>Total a pagar: $${totalSumaPrecio}`

    localStorage.setItem("nombres", datos);
    localStorage.setItem("nombreCantidad", nombreCantidad);
    localStorage.setItem("nombreDescripcion", nombreDescripcion);
    localStorage.setItem("nombrePrecio", nombrePrecio);
    localStorage.setItem("cantidad", cantidad);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("precio", precio);
    localStorage.setItem("precioTotal", total)

    cant.value = ''
    descrip.value = ''
    price.value = ''
});

recuperar.addEventListener("click", function () {
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

