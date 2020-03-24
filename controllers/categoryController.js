const categoryModel = require("../models/categoryModel")

module.exports = {
    add: function (req, res) {
        const category = new categoryModel({
            name: req.body.name,
            subcategory: req.body.subcategory,

        })
        category.save(function (err) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    list: function (req, res) {
        categoryModel.find({}).populate({path:"subcategory",populate:{path:'product'}}).exec( function (err, listCategory) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json(listCategory)
            }
        })
    },

    getByID: function (req, res) {
        categoryModel.findOne({ _id: req.params.id }).populate({
            path: "subcategory",
            populate:
                { path: "product" }
        }).exec(function (err, val) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json(val)
            }
        })
    },

    delete: function (req, res) {
        categoryModel.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    Update: function (req, res) {
        categoryModel.updateOne({ _id: req.params.id }, { $set: req.body },
            { name: req.body.name }, function (err) {
                if (err) {
                    res.json({ state: "no", msg: "no correct" })
                }
                else {
                    res.json({ state: "yes", msg: "correct" })
                }
            })
    },
    Push: function (req, res) {
        categoryModel.updateOne({ _id: req.params.id },
            { $push: { subcategory: req.body.subcategory } }, function (err) {
                if (err) {
                    res.json({ state: "no", msg: "ID not found" })
                } else {
                    res.json({ state: "ok", msg: "child category updated" })
                }
            })
    }
}