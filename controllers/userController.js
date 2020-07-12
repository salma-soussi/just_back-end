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

    const user = new userModel({
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
    user.save(function (err, data) {
      if (err) {
        res.json({
          state: "No",
          Msg: "Error" + err
        });
      } else {
        console.log(data)
        res.json({
          state: "OK",
          msg: "done ! user was added"
        });
      }
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
    }, (err, user) => {
      if (!user) {
        return res.status(404).json('email not found')
      } else {
        console.log(user.__t)
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
      }
    }
    );
  }
};