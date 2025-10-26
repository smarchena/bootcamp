//Inicializar todo (paquetes)
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


// Configuración
app.use(bodyParser.urlencoded({ extended: true })) // se hace uso del middleware 'body-parser'

//Rutas: (son lo que el servidor entiende que el cliente puede llegar a pedirle)
app.get('/inicio', function (req, res) {
    res.sendFile(__dirname + '/formulario.html')
})
app.post('/formulario', function (req, res) { //cuando alguien envia algo por 'post' signfica que es un insert, hay que insertar algo (form)
    // console.log(req.body)
    console.log('Hola ' + req.body.name)
})
app.post('/suma', function (req, res) {
    let suma = parseFloat(req.body.suma1) + parseFloat(req.body.suma2)
    console.log(`El resultado de la suma es: ${suma}`)
})
app.post('/resta', function (req, res) {
    let resta = parseFloat(req.body.resta1) - parseFloat(req.body.resta2)
    console.log(`El resultado de la resta es: ${resta}`)
})
app.post('/multiplicacion', function (req, res) {
    let multiplicacion = parseFloat(req.body.multi1) * parseFloat(req.body.multi2)
    console.log(`El resultado de la multiplicacion es: ${multiplicacion}`)
})
app.post('/division', function (req, res) {
    let division = parseFloat(req.body.div1) / parseFloat(req.body.div2)
    console.log(`El resultado de la división es: ${division}`)
})

app.listen(3000, function () {
    console.log('Iniciando servidor en localhost:3000')
})