const mongoose = require("mongoose");

const quotationScheme = mongoose.model(
    "quotation",
    new mongoose.Schema({
        status: {
            type: String,
            required: true,
            trim: true
        },
        comment: {
            type: String,
            trim: true
        },
        quotationNUM: {
            type: Number,
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
            required: true,
            trim: true
        },
        IDSeller: {
            type: String,
            required: true,
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
        details: [{
            description1: {
                type: String,
                required: true,
                trim: true
            },
            quantity1: {
                type: Number,
                required: true,
                trim: true
            },
            description2: {
                type: String,
                trim: true
            },
            quantity2: {
                type: Number,
                trim: true
            },
            description3: {
                type: String,
                trim: true
            },
            quantity3: {
                type: Number,
                trim: true
            },
            description4: {
                type: String,
                trim: true
            },
            quantity4: {
                type: Number,
                trim: true
            },
            description5: {
                type: String,
                trim: true
            },
            quantity5: {
                type: Number,
                trim: true
            }
        }],
        tax: {
            type: Number,
            required: true,
            trim: true
        },
        total: {
            type: Number,
            required: true,
            trim: true
        },
        subtotal: {
            type: Number,
            required: true,
            trim: true
        },
        unitPrice1: {
            type: Number,
            required: true,
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
            required: true,
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