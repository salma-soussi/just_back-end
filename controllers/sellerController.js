const sellerModel = require("../models/sellerModel");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fs = require("fs");
const upload = multer({
    dest: __dirname + "/uploads/images/"
})

module.exports = {
    add: function (req, res) {

        console.log(req.body)

        const seller = new sellerModel({
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
        seller.save(function (err, data) {
            if (err) {
                res.json({

                    state: "No",
                    Msg: "Error" + err
                });
            } else {
                console.log(data)
                res.json({
                    state: "OK",
                    msg: "done ! seller was added"
                });
            }
        })

    },
    getAll: (req, res) => {
        sellerModel.find({}, (err, list) => {
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
        sellerModel.findOne({
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
        sellerModel.findOneAndRemove({
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
                        msg: "done ! seller was deleted"
                    });
                }
            }
        );
    },
    Update: function (req, res) {
        let tes = { $set: req.body }
        if (req.body.password) {
            const pass = bcrypt.hashSync(req.body.password, 10)
            tes = { $set: req.body, password: pass }
        }
        sellerModel.updateOne({
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
                        msg: "done ! seller updated"
                    });
                }
            }
        );
    },
    getfile: function (req, res) {
        res.sendFile(__dirname + "/uploads/images/" + req.params.avatar)
    },
    Upload: function (req, res) {
        if (req.file) {
            console.log("avatar")
            console.log(req.file)
            sellerModel.updateOne({
                _id: req.params.id
            }, {
                avatar: req.file.filename,
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
        } else {
            console.log("errrrrr avatar")
            console.log(req.file)
        }
    },
    Authentication: function (req, res) {

        sellerModel.findOne({
          email: req.body.email
        }, (err, user) => {
          if (!user) {
            return res.status(404).json('email not found')
          } else {
            console.log(user.__t)
            if (user.__t === "seller"){
                return bcrypt.compare(req.body.password, user.password).then(isMatch => {
                    if (isMatch) {
                      const token = jwt.sign({
                        id: user._id
                      },
                        req.app.get("secretKey"), {
                        expiresIn: "1h"
                      }
                      );
                      console.log("user found")
                      res.json({
                        state: "ok",
                        msg: "user found",
                        data: {
                          user: user,
                          token
                        },
                      }
                      );
                    } else {
                      return res.status(400).json('password incorrect')
                    }
                  }
                  )
            }else{
                alert("your are not a seller, you are a buyer")
            }
            
          }
        }
        );
      }

};