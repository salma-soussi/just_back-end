const quotationModel = require("../models/userModel");

module.exports = {
    add: function (req, res) {
        const Quotation = new quotationModel({
            quotationNUM: req.body.quotationNUM,
            IDBuyer: req.body.IDBuyer,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
        });
        var item1 = {
            description1: req.body.description1,
            quantity1: req.body.quantity1
        }
        var item2 = {
            description2: req.body.description2,
            quantity2: req.body.quantity2
        }
        var item3 = {
            description3: req.body.description3,
            quantity3: req.body.quantity3
        }
        var item4 = {
            description4: req.body.description4,
            quantity4: req.body.quantity4
        }
        var items = Object.assign(item1, item2, item3, item4)
        newQuot.details.push(items)
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
        quotationModel.findByIdAndUpdate({
                _id: req.params.id
            }, {
                $set: req.body
            }, {
                unitPrice1: req.body.unitPrice1,
                unitPrice2: req.body.unitPrice2,
                unitPrice3: req.body.unitPrice3,
                unitPrice4: req.body.unitPrice4,
                unitPrice5: req.body.unitPrice5,
                totalPrice1: req.body.totalPrice1,
                totalPrice2: req.body.totalPrice2,
                totalPrice3: req.body.totalPrice3,
                totalPrice4: req.body.totalPrice4,
                totalPrice5: req.body.totalPrice5,
                tax: req.body.tax,
                total: req.body.total,
                subtotal: req.body.subtotal,
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