const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://user:password@cluster0.pvycuuk.mongodb.net/music_bands')
    .then(function (db) {
        console.log('Conectado a la base de datos!! :D')
    }).catch(function (err) {
        console.log(`Ups! Ocurrió un error ${err}`)
    })

const bands = require('./models/bands')

app.get('/inicio', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/formulario', async function (req, res) {
    let bandsForm = new bands(req.body)
    await bandsForm.save()
    console.log(bandsForm)
    res.send(`La banda ${req.body.name} se ha agregado correctamente.`)
})

app.put('/update/:id_band', async function (req, res) {
    let id = req.params.id_band
    console.log(`Modificando documento con ID: ${id}`)

    let doc = await bands.findById(id)
    doc.name = req.body.name
    doc.category = req.body.category
    doc.singer = req.body.singer
    doc.integrants = req.body.integrants
    await doc.save()
    res.send(`La banda "${doc.name}" se actualizó correctamente.`)
})

app.delete('/delete/:id_band_delete', async function (req, res) {
    let id = req.params.id_band_delete
    let doc = bands.findById(id)
    await doc.deleteOne()
    res.send('La banda se eliminó de forma correcta.')
})

app.listen(3000)