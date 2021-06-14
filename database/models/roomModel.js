const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String },
    answers: { type: String }
})

const roomModel = module.exports = new mongoose.model('roomModel', roomSchema)