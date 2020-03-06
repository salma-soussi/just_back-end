const mongoose = require('mongoose')


const notificationScheme = user.discriminator("notification", new mongoose.Schema({

    quotationNum: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    description1: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    seen: {
        type: String,
        required: true,
        trim: true
    },

}))
module.exports = notificationScheme