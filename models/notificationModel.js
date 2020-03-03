const mongoose = require("mongoose");

const notificationScheme = mongoose.model(
    "notification",
    new mongoose.Schema({
        quotationNUM: {
            type: Number,
            required: true,
            trim: true
        },

        content: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            required: true,
            trim: true
        },

        
        seen: {
            type: Number,
            required: true,
            trim: true
        },

        
    })
);
module.exports = notificationScheme;