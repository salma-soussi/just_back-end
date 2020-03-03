const quotationModel = require("../models/userModel");

module.exports = {
    add: function (req, res) {
        const Quotation = new quotationModel({
            quotationNUM: req.body.quotationNUM,
            IDBuyer: req.body.IDBuyer,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            details: req.body.details,
            price: req.body.price,

        });
        Quotation.save(function (err) {
            if (err) {
                res.json({
                    state: "No",
                    Msg: "Error" + err
                });
            } else {
                res.json({
                    state: "OK",
                    msg: "done ! quotation was added"
                });
            }
        });
    },
    getAll: (req, res) => {
        quotationModel.find({}, (err, list) => {
            if (err) {
                res.json({
                    state: "no",
                    msg: "error" + err
                });
            } else {
                res.json(list);
            }
        });
    },
    getByID: (req, res) => {
        quotationModel.findOne({
                _id: req.params.id
            },
            (err, list) => {
                if (err) {
                    res.json({
                        state: "no",
                        msg: "error" + err
                    });
                } else {
                    res.json(list);
                }
            }
        );
    },
    delete: (req, res) => {
        //delete  findOneAndRemove  findOneDelete
        quotationModel.findOneAndRemove({
                _id: req.params.id
            },
            (err, list) => {
                if (err) {
                    res.json({
                        state: "no",
                        msg: "error" + err
                    });
                } else {
                    res.json({
                        state: "OK",
                        msg: "done ! user was deleted"
                    });
                }
            }
        );
    },
    Update: function (req, res) {
        quotationModel.updateOne({
                _id: req.params.id
            }, {
                $set: req.body
            }, {
                quotationNUM: req.body.quotationNUM,
                IDBuyer: req.body.IDBuyer,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                date: req.body.date,
                details: req.body.details,
                price: req.body.price,
            },
            function (err, list) {
                if (err) {
                    res.json({
                        state: "no",
                        msg: "error" + err
                    });
                } else {
                    res.json({
                        state: "OK",
                        msg: "done ! user updated"
                    });
                }
            }
        );
    },

};