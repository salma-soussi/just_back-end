const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
var fs = require("fs");
const upload = multer({
  dest: __dirname + "/uploads/images/"
})

module.exports = {
  add: function (req, res) {
    var file = __dirname + "/uploads/images/" + req.file.originalname;
    fs.readFile(req.file.path, function (err, data) {
      fs.writeFile(file, data, function (error) {
        if (error) {
          var response = {
            message: "sorry could not upload file",
            filename: req.file.originalname
          }
        } else {
          const User = new userModel({
            companyName: req.body.companyName,
            sector: req.body.sector,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            occupation: req.body.occupation,
            governorate: req.body.governorate,
            avatar: req.file.originalname,
            password: req.body.password
          });
          User.save(function (err) {
            if (err) {
              res.json({
                state: "No",
                Msg: "Error" + err
              });
            } else {
              res.json({
                state: "OK",
                msg: "done ! user was added"
              });
            }
          })
        }
      })
    })
  },
  getAll: (req, res) => {
    userModel.find({}, (err, list) => {
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
    userModel.findOne({
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
  deleteUser: (req, res) => {
    //delete  findoneAndRemove  findOneDelete
    userModel.findOneAndRemove({
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
  UpdateUser: function (req, res) {
    userModel.updateOne({
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
    var file = __dirname + '/uploads/' + req.file.originalname
    fs.readFile(req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
        if (err) {
          var response = {
            message: 'sorry',
            filename: req.file.originalname
          }
        } else {
          userModel.updateOne({
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
  },
  Authentication: function (req, res) {
    userModel.findOne({
        email: req.body.email
      },
      function (err, userInfo) {
        if (err) {
          console.log(err);
        } else {
          if (bcrypt.compare(req.body.password, userInfo.password)) {
            const token = jwt.sign({
                id: userInfo._id
              },
              req.app.get("secretKey"), {
                expiresIn: "1h"
              }
            );
            res.json({
              state: "ok",
              msg: "user found",
              date: {
                user: userInfo,
                token
              }
            });
          } else {
            res.json({
              state: "no",
              msg: "invalid password",
              data: null
            });
          }
        }
      }
    );
  }
};