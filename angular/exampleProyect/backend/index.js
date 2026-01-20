var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(process.env.LINK)
.then(function(db){
    console.log('Conectado a la base de datos! ;D')
})
.catch(function(err){
    console.log('Ups! Ocurrió un error.' + err)
})


app.listen(3000)