const buyerModel = require("../models/buyerModel");
const multer = require("multer");
var fs = require("fs");
const upload = multer({
    dest: __dirname + "/uploads/images/"
})

module.exports = {
    add: function (req, res) {

        console.log(req.body)

        const buyer = new buyerModel({
            companyName: req.body.companyName,
            sector: req.body.sector,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            occupation: req.body.occupation,
            governorate: req.body.governorate,
            password: req.body.password,
        });
        buyer.save(function (err, data) {
            if (err) {
                res.json({
                    
                    state: "No",
                    Msg: "Error" + err
                });
            } else {
                console.log(data)
                res.json({
                    state: "OK",
                    msg: "done ! buyer was added"
                });
            }
        })

    },
    getAll: (req, res) => {
        buyerModel.find({}, (err, list) => {
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
        buyerModel.findOne({
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
        buyerModel.findOneAndRemove({
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
                        msg: "done ! buyer was deleted"
                    });
                }
            }
        );
    },
    Update: function (req, res) {
        buyerModel.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            companyName: req.body.companyName,
            sector: req.body.sector,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            occupation: req.body.occupation,
            governorate: req.body.governorate,
            password: req.body.password
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
                        msg: "done ! buyer updated"
                    });
                }
            }
        );
    },
    getfile: function (req, res) {
        res.sendFile(__dirname + "/uploads/images/" + req.params.avatar)
    },
    Upload: function (req, res) {
        var file = __dirname + '/uploads/' + req.file.originalname
        fs.readFile(req.file.path, function (err, data) {
            fs.writeFile(file, data, function (err) {
                if (err) {
                    var response = {
                        message: 'sorry',
                        filename: req.file.originalname
                    }
                } else {
                    buyerModel.updateOne({
                        _id: req.params.id
                    }, {
                        avatar: req.file.originalname,
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
                                    msg: "done ! avatar updated"
                                });
                            }
                        }
                    );
                }
            })
        })
    }
};