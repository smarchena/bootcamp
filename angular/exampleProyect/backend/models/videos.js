const mongoose = require('mongoose')
const Schema = mongoose.Schema

let video = new Schema({
    title: String,
    url: String,
    image: String,
    category: String,
    origin: String,
    status: Boolean,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('videos', video)
