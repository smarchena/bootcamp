//instanciamos el paquete Mongoose y utilizamos el Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creamos el "esqueletico" (modelo/schema) de la colección
let Ejemplo = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    estado: {
        type: Boolean,
        default: false
    },
    pais: {
        type: String,
        default: 'Colombia'
    }
})

//exportamos el módulo que acabamos de crear
module.exports = mongoose.model('usuarios', Ejemplo) //la coleccion se llama 'usuarios' y el modelo es 'Ejemplo'
