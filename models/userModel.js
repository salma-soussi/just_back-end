const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const baseOption = {
  discriminatorKey: 'userType',

  collection: 'users'

}

const userScheme = mongoose.model(
  "user",
  new mongoose.Schema({
    sector: {
      type: String,
      required: true,
      trim: true
    },
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
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
    occupation: {
      type: String,
      required: true,
      trim: true
    },
    governorate: {
      type: String,
      required: true,
      trim: true
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      trim: true
    }
  }).pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10);
  })

  
);
module.exports = userScheme;