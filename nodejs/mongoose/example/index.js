const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//configurar bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

//conectar con la base de datos
mongoose.connect('mongodb+srv://smarchena:Marchena08.@cluster0.pvycuuk.mongodb.net/dbPruebaNode')
    .then(function (db) {
        console.log('Conectado a la base de datos!')
    })
    .catch(function (err) {
        console.log(`Ups! Ocurrió un error: ${err}`)
    })

//se hace el require del modelo
let = Ejemplo_coleccion = require('./models/usuarios')

//inicio
app.get('/formulario', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/', async function() { //funciones asincronicas, si la llamada o busqueda se demora mucho, no se quede ahí sino que siga con el resto del código.
    let documentos = await Ejemplo_coleccion.find() //db.collection.find({}).sort()
    console.log(documentos)
})

//Ruta para guardar los datos enviados por el cliente (Create)
app.post("/guardarDatos", async function (req, res) {
  var datos_cliente = req.body
  var doc = new Ejemplo_coleccion(datos_cliente)
  await doc.save()
  console.log(doc)
  res.send(doc)
});

app.listen(3000, function () {
    console.log('Iniciando servidor...')
})
//ruta para obtener los usuarios (Read)


