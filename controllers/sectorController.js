const sectorModel = require("../Models/sectorModel")

module.exports = {
    add: function (req, res) {
        const sector = new sectorModel({
            name: req.body.name,
            category: req.body.category,

        })
        sector.save(function (err) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    list: function (req, res) {
        sectorModel.find({}).populate({path:'category',populate:{path:"subcategory",populate:{path:"product"}}}).exec( function (err, listSector) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json(listSector)
            }
        })
    },

    getByID: function (req, res) {
        sectorModel.findOne({ _id: req.params.id }).populate({
            path: "category",
            populate:
                { path: "subcategory" }
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
        sectorModel.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({ state: "no", msg: "no correct" })
            }
            else {
                res.json({ state: "yes", msg: "correct" })
            }
        })
    },

    Update: function (req, res) {
        sectorModel.updateOne({ _id: req.params.id }, { $set: req.body },
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
        sectorModel.updateOne({ _id: req.params.id },
            { $push: { category: req.body.category } }, function (err) {
                if (err) {
                    res.json({ state: "no", msg: "ID not found" })
                } else {
                    res.json({ state: "ok", msg: "child category updated" })
                }
            })
    }
}