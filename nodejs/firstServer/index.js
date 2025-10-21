/* NODE PURO */

/* //inicializar módulos HTTP  y FileSystem
var http = require('http')
var fs = require('fs')

//creamos un objeto con nuestro servidor usando el módulo HTTP
http.createServer(function (req, res) {  //request and response

    //preparar parte de la respuesta del servidor (cabecera)
    res.writeHead(200, { // 200 código http (todo ok)
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*' // * significa que cualquiera puede acceder. (es un control de acceso)
    })

    //tomamos el archivo index.html utilizando el módulo fs
    var readStream = fs.createReadStream(__dirname + '/index.html')

    //enviamos nuestro index.html al cliente
    readStream.pipe(res)

}).listen(3000)

//nos decimos a nosotros mismos qué está pasando
console.log('Alguien está visitando nuestro sitio (http://localhost:3000)') */



/* EXPRESS */

//Cargamos paquete express e instanciamos la app
var express = require('express')
var app = express()

//enviamos nuestro index.html al cliente como página de inicio
app.get('/inicio', function(req, res) {
    console.log('Alguien ingresó al sitio a la dirección localhost:3000/inicio')
    res.sendFile(__dirname + '/index.html')
})

//Ejercicio: enviamos contactos.html al cliente como página de contactos
app.get('/contactos', function(req, res) { 
    console.log('Alguien ingresó al sitio a la dirección localhost:3000/contactos')
    res.sendFile(__dirname + '/contactos.html')
})
app.listen(3000)


