const mongoose = require('mongoose')


const notificationScheme = mongoose.model("notification", new mongoose.Schema({

    quotationNUM: {
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
    name1: {
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