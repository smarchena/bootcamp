const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Blog = require('./src/models/Blog')

//configuraciones
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', __dirname + '/src/views')
app.set('views engine', 'ejs')

mongoose.connect('mongodb+srv://user:<password>@cluster0.pvycuuk.mongodb.net/blog')
    .then(function (db) {
        console.log('¡Conectado a la base de datos! :D')
    }
    ).catch(function (err) {
        console.log(`Ups! Ocurrió un problema ${err}`)
    })

app.get('/inicio', async function (req, res){
    var docs = await Blog.find();
    res.sendFile(__dirname + './src/views/index')
})



app.listen(3000)



