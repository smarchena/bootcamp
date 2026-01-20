const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Blog = require('./src/models/Blog')

app.use(bodyParser.urlencoded({ extended: true }))

let path = __dirname + "/src/views"
app.set("views", path)
app.set("view engine", "ejs")

require('dotenv').config()

mongoose.connect(process.env.BLOG)
    .then(function (db) {
        console.log('¡Conectado a la base de datos! :D')
    }
    ).catch(function (err) {
        console.log(`Ups! Ocurrió un problema ${err}`)
    })

app.get('/inicio', async function (req, res){  
    
    const search = req.query.search || ''
    const filter = req.query.filter
    
    let query = {}

    if(search){
        query[filter] = {$regex: search, $options: 'i'}
    }

    let blogs = await Blog.find(query) 
    res.render('index', {titulo: 'CARDS', blog: blogs, nuevo: false, verMas: false, search: search, filter: filter})
})

app.get('/create', async function (req, res) {   
    let blogs = await Blog.find()    
    res.render('index', {
        titulo: 'Create new card', 
        blog: blogs,          
        nuevo: true,
        verMas: false,
        search: '',
        filter: title
    })   
})

app.post('/create', async function(req,res){        
    let datos = req.body
    let new_blog = new Blog(datos)
    new_blog.save()
    console.log('Guardado en la base de datos: ok!')    
    res.redirect('/inicio')
})

app.get('/edit/:id_card', async function(req,res){    
    let id = req.params.id_card    
    let card = await Blog.findById(id)
    let blogs = await Blog.find()

    res.render('index', {
        titulo: `Editing card named: "${card.title}"`,
        blog: blogs,
        card: card,
        url: card.url,
        nuevo: false,
        verMas: false
    })
})

app.post('/edit/:id_card', async function(req, res){
    let id = req.params.id_card
    let card = await Blog.updateOne({ _id: id }, req.body);
    console.log('Actualizado con éxito.')
    res.redirect('/inicio')
})

app.get('/see-more/:id_card', async function(req,res){   
    let id = req.params.id_card
    let card = await Blog.findById(id)
    res.render('index', {
        titulo: card.title,
        url: card.url,
        description: card.description,
        verMas: true,
        nuevo: null
    })
})

app.get('/delete/:id_card', async function(req, res){
    let id = req.params.id_card
    let card = await Blog.findById(id)
    await card.deleteOne({_id: id})
    res.redirect('/inicio')
})

app.listen(3000)



