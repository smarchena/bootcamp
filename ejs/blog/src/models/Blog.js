const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema({
    title : String,
    url: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    },        
    description: {
        type: String,
        default: 'No description avaliable!'
    }
})

module.exports = mongoose.model('blog', Blog)