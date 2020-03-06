const mongoose = require('mongoose')
const user = require('./userModel')

const sellerScheme = user.discriminator("seller", new mongoose.Schema({


}))
module.exports = sellerScheme