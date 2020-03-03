const mongoose = require("mongoose");

const quotationScheme = mongoose.model(
    "quotation",
    new mongoose.Schema({
        quotationNUM: {
            type: Number,
            required: true,
            trim: true
        },
        IDBuyer: {
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
            required: true,
            trim: true
        },
        details: [{
            description: {
                type: String,
                required: true,
                trim: true
            },
            quantity: {
                type: Number,
                required: true,
                trim: true
            }
        }],
        price: [{
            unitPrice: {
                type: Number,
                required: true,
                trim: true
            },
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
            }
        }],
    })
);
module.exports = quotationScheme;