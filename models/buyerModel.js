const mongoose = require('mongoose')

const buyer = require('./userModel')

const buyerScheme = buyer.discriminator("buyer", new mongoose.Schema({


}))
module.exports = buyerScheme