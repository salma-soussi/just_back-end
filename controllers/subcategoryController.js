const subcategoryModel = require("../Models/subcategoryModel");

module.exports = {
    add: function (req, res) {
        const subcategory = new subcategoryModel({
            name: req.body.name,
            product: req.body.product,
        })
        subcategory.save(function (err) {
            if (err) {
                res.json({ state: "no", msg: "error" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    list: function (req, res) {
        subcategoryModel.find({}).populate({path:"product"}).exec(function (err, listSubcategory) {
            if (err) {
                res.json({ state: "no", msg: "error" })
            }
            else {
                res.json(listSubcategory)
            }
        })
    },

    getByID: function (req, res) {
        subcategoryModel.findOne({ _id: req.params.id }).populate("product").exec(function (err, elt) {
            if (err) {
                res.json({ state: "no", msg: "error" })
            }
            else {
                res.json(elt)
            }
        })
    },

    delete: function (req, res) {
        subcategoryModel.findByIdAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({ state: "no", msg: "error" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    Update: function (req, res) {
        subcategoryModel.updateOne({ _id: req.params.id }, { $set: req.body },
            { nom: req.body.nom }, function (err) {
                if (err) {
                    res.json({ state: "no", msg: "error" })
                }
                else {
                    res.json({ state: "yes", msg: "correctly update" })
                }
            })
    },
    Push: function (req, res) {
        subcategoryModel.updateOne({ _id: req.params.id },
            { $push: { product: req.body.product } }, function (err) {
                if (err) {
                    res.json({ state: "no", msg: "ID not found" })
                } else {
                    res.json({ state: "ok", msg: "child category updated" })
                }
            })
    }
}