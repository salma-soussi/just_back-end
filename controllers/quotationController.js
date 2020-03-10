const quotationModel = require("../models/quotationModel");

module.exports = {
    add: function (req, res) {
        const Quotation = new quotationModel({
            status: req.body.status,
            validUntil: req.body.validUntil,
            date: req.body.date,
            comment: req.body.comment,
            IDBuyer: req.body.IDBuyer,
            IDSeller: req.body.IDSeller,
            quotationNUM: req.body.quotationNUM,
            companyName: req.body.companyName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
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
                subtotal: req.body.subtotal
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
    acceptedStatus: function (req, res) {
        quotationModel
            .findByIdAndUpdate({
                _id: req.params.id
            }, {
                status: req.body.status
            })
            .then(() => {
                Quotation.findOne({
                    _id: req.params.id
                }).then(answer => {
                    res.send(answer);
                });
            });
    },
    DeniedStatus: function (req, res) {
        quotationModel
            .findByIdAndUpdate({
                _id: req.params.id
            }, {
                status: req.body.status
            })
            .then(() => {
                Quotation.findOne({
                    _id: req.params.id
                }).then(answer => {
                    res.send(answer);
                });
            });
    },
    pushDetails: function (req, res) {
        quotationModel.findOneAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                details: {
                    description1: req.body.description1,
                    quantity1: req.body.quantity1,
                }
            }
        }, function (err) {
            if (err) {
                res.json({
                    state: 'no',
                    msg: 'vous avez un erreur'
                })
            } else {
                console.log({

                    $push: {
                        details: {
                            description1: req.body.description1,
                            quantity1: req.body.quantity1,
                        }
                    }


                })
                res.json({
                    state: 'yes'
                })
            }
        })
    },
};