const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema({
     nombre: String,
  descripcion: {
    type: String,
    default: "...",
  },
  prioridad: String,
  estado: {
    type: Boolean,
    default: false,
  },
    
})

module.exports = mongoose.model('blog', Blog)