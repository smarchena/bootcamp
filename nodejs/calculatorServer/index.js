var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

//CACULATOR PARAMS FORM
app.get('/inicio', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/operation', function (req, res) {
    res.sendFile(__dirname + '/calculator_params.html')
})
app.post('/operation/:operator', function (req, res) {
    var parametro = req.params.operator

    if (parametro == 'suma') {
        let suma = parseFloat(req.body.suma1) + parseFloat(req.body.suma2)
        res.send(`El resultado de la ${parametro} es: ${suma}`)
    } else if (parametro == 'resta') {
        let resta = parseFloat(req.body.resta1) - parseFloat(req.body.resta2)
        res.send(`El resultado de la resta es: ${resta}`)
    } else if (parametro == 'multiplicacion') {
        var multi = parseFloat(req.body.multi1) * parseFloat(req.body.multi2)
        res.send(`El resultado de la multiplicación es: ${multi}`)
    } else if (parametro == 'division') {
        var div = parseFloat(req.body.div1) / parseFloat(req.body.div2)
        if (req.body.div2 == 0) {
            res.send('No se puede dividir entre 0')
            console.log('No se puede dividir entre 0')
        } else {
            res.send(`El resultado de la división es: ${div}`)
        }
    }
})

//CALCULATOR
app.get('/calculator', function (req, res) {
    res.sendFile(__dirname + '/calculator.html')
})

app.post('/calculator/operation', function (req, res) {
    let operator = req.body.operator
    if (operator == 'suma') {
        let suma = parseFloat(req.body.num1) + parseFloat(req.body.num2)
        console.log(`El resultado de la suma es: ${suma}`)
        res.send(`El resultado de la suma es: ${suma} <br><br> 
            <a href='http://localhost:3000/calculator'>Ir a página la calculadora</a>`)
    } else if (operator == 'resta') {
        let resta = parseFloat(req.body.num1) - parseFloat(req.body.num2)
        console.log(`El resultado de la resta es: ${resta}`)
        res.send(`El resultado de la resta es: ${resta} <br><br> 
            <a href='http://localhost:3000/calculator'>Ir a página la calculadora</a>`)
    } else if (operator == 'multiplicacion') {
        let multiplicacion = parseFloat(req.body.num1) * parseFloat(req.body.num2)
        console.log(`El resultado de la multiplicación es: ${multiplicacion}`)
        res.send(`El resultado de la multiplicación es: ${multiplicacion} <br><br> 
            <a href='http://localhost:3000/calculator'>Ir a página la calculadora</a>`)
    } else if (operator == 'division') {
        let division = parseFloat(req.body.num1) / parseFloat(req.body.num2)
        if (req.body.num2 == 0) {
            res.send('No se puede dividir entre 0' + "<br><br> <a href='http://localhost:3000/calculator'>Ir a página principal</a>")
        } else {
            console.log(`El resultado de la división es: ${division}`)
            res.send(`El resultado de la división es: ${division} <br><br> 
            <a href='http://localhost:3000/calculator'>Ir a página la calculadora</a>`)
        }
    }
})
app.get('/hola/:nombre', function (req, res) {
    var parametro = req.params.nombre
    res.send(`Hola ${parametro} ¿como estás?`)
})

app.listen(3000)