const mongoose = require("mongoose");

const details = new mongoose.Schema({

    description1: {
        type: String,
        required: true,
    },
    quantity1: {
        type: String,
        required: true
    },
    name1:{
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true,
    },
    quantity2: {
        type: String,
        required: true
    },
    name2:{
        type: String,
        required: true
    },
    description3: {
        type: String,
        required: true,
    },
    quantity3: {
        type: String,
        required: true
    },
    name3:{
        type: String,
        required: true
    },
    description4: {
        type: String,
        required: true,
    },
    quantity4: {
        type: String,
        required: true
    },
    name4:{
        type: String,
        required: true
    },
    description5: {
        type: String,
        required: true,
    },
    quantity5: {
        type: String,
        required: true
    },

})

const quotationScheme = mongoose.model(
    "quotation",
    new mongoose.Schema({
        status: {
            type: String,
            trim: true
        },
        comment: {
            type: String,
            trim: true
        },
        quotationNUM: {
            type: String,
            required: true,
            trim: true
        },
        companyName: {
            type: String,
            required: true,
            trim: true
        },
        IDBuyer: {
            type: String,
            trim: true
        },
        IDSeller: {
            type: String,
            trim: true
        },
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now(),
            required: true,
            trim: true
        },
        validUntil: {
            type: Date,
            required: true,
            trim: true
        },
        details: [details],
        tax: {
            type: Number,

            trim: true
        },
        total: {
            type: Number,

            trim: true
        },
        subtotal: {
            type: Number,

            trim: true
        },
        unitPrice1: {
            type: Number,

            trim: true
        },
        unitPrice2: {
            type: Number,
            trim: true
        },
        unitPrice3: {
            type: Number,
            trim: true
        },
        unitPrice4: {
            type: Number,
            trim: true
        },
        unitPrice5: {
            type: Number,
            trim: true
        },
        totalPrice1: {
            type: Number,

            trim: true
        },
        totalPrice2: {
            type: Number,
            trim: true
        },
        totalPrice3: {
            type: Number,
            trim: true
        },
        totalPrice4: {
            type: Number,
            trim: true
        },
        totalPrice5: {
            type: Number,
            trim: true
        }
    })
);
module.exports = quotationScheme;