const mongoose = require('mongoose')
const schema = mongoose.Schema()

const emailschema = mongoose.model('email', new mongoose.Schema({

    to: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }

}))

module.exports = emailschema;