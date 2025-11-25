const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Blog = require('./src/models/Blog')

app.use(bodyParser.urlencoded({ extended: true }))

let path = __dirname + "/src/views"
app.set("views", path)
app.set("view engine", "ejs")

mongoose.connect('mongodb+srv://user:<password>@cluster0.pvycuuk.mongodb.net/blog')
    .then(function (db) {
        console.log('¡Conectado a la base de datos! :D')
    }
    ).catch(function (err) {
        console.log(`Ups! Ocurrió un problema ${err}`)
    })

app.get('/inicio', async function (req, res){   
    let blogs = await Blog.find() 
    res.render('index', {titulo: 'CARDS', blog: blogs, message: 'You can add a new card !'})
})

app.get('/create', async function (req, res) {     
    res.render('_create')   
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

    res.render('_edit', {
        titulo: `Editing card named: "${card.title}"`,
        blog: blogs,
        card: card,
        url: card.url
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
    res.render('_see-more', {
        titulo: card.title,
        url: card.url,
        description: card.description
    })
})

app.get('/delete/:id_card', async function(req, res){
    let id = req.params.id_card
    let card = await Blog.findById(id)
    await card.deleteOne({_id: id})
    res.redirect('/inicio')
})

app.listen(3000)



