const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bands = new Schema({
    name: String,
    category: String,
    singer: String,
    integrants: Number
})

module.exports = mongoose.model('bands', bands)