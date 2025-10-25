var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) 

/* app.get('/inicio', function (req, res) {
    res.send('Bienvenid@ al sitio web!')
}) */
app.get('/operation', function (req, res) {
    res.sendFile(__dirname + '/calculator_params.html')
})
app.post('/operation/:suma', function(req, res) {
    var parametro = req.params.suma
    var suma = parseFloat(req.body.suma1) + parseFloat(req.body.suma2)
    res.send(`El resultado de la ${parametro} es: ${suma}`)
})
app.post('/operation/:resta', function(req, res) {
    var parametro1 = req.params.resta
    var resta = parseFloat(req.body.resta1) - parseFloat(req.body.resta2)
    res.send(`El resultado de la resta es: ${resta}`)
})
app.post('/operation/:multiplicacion', function(req, res) {
    var parametro2 = req.params.multiplicacion
    var multi = parseFloat(req.body.multi1) * parseFloat(req.body.multi2)
    res.send(`El resultado de la multiplicación es: ${multi}`)
})
app.post('/operation/:division', function(req, res) {
    var parametro3 = req.params.division
    var div = parseFloat(req.body.div1) / parseFloat(req.body.div2)
    res.send(`El resultado de la división es: ${div}`)
})

//localhost:3000/hola/Santiago
app.get('/hola/:nombre', function(req, res) {
    var parametro = req.params.nombre
    res.send(`Hola ${parametro} ¿como estás?`)

})

app.listen(3000)