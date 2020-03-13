const mongoose = require("mongoose");

const categorySchema = mongoose.model("category", new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"
    }],

}))

module.exports = categorySchema