const mongoose = require("mongoose");

const sectorSchema = mongoose.model("sector", new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }],

}))

module.exports = sectorSchema