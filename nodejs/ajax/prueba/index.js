var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/inicio', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/toque', function (req, res) {
    var fecha = new Date()
    res.send(fecha)
})

app.post('/list', function (req, res) {
    let list = req.body.lista
    var fecha2 = new Date()
    console.log(list)
    res.send(`${list} -> ${fecha2}`)
})

app.listen(3000)