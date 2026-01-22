var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var videos = require('./models/videos')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.BACK_FRONT)
    .then(function (db) {
        console.log('Conectado a la base de datos! ;D')
    })
    .catch(function (err) {
        console.log(`Ups! Ocurrió un error: ${err}`)
    })

app.get('/videos', async function (req, res) {
    let search = await videos.find()
    res.send(search)
})

app.listen(3000)