const mongoose = require("mongoose");

const subcategorySchema = mongoose.model("subcategory", new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }],
}))

module.exports = subcategorySchema;