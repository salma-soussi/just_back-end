const notificationModel = require("../models/notificationModel");

module.exports = {
    add: function (req, res) {
        const notification = new notificationModel({

            quotationNUM: req.body.quotationNUM,
            content: req.body.content,
            time: req.body.time,
            description: req.body.description,
            type: req.body.type,
            seen: req.body.seen,

        });
        notification.save(function (err) {
            if (err) {
                res.json({
                    state: "No",
                    Msg: "Error :" + err
                });
            } else {
                res.json({

                    state: "OK",
                    msg: "done ! notification was added"
                });
            }
        });
    },
    answer: function (req, res) {
        var answerNotif = new notificationModel({
            quotationNum: req.body.quotationNum,
            status: req.body.status,
            
        })
        answerNotif.save((err, answernotif) => {
            if (err) {
                res.send('err saving notification')
            } else {
                res.send(answernotif)
            }
        })
    },
    denied: function (req, res) {

        var deniedNotif = new notificationModel({
            quotationNum: req.body.quotationNum,
            status: req.body.status,
            content: req.body.content,
            time: req.body.time,
            description1: req.body.description1,
            type: req.body.type,
            seen: req.body.seen,
        })
        deniedNotif.save((err, deniednotif) => {
            if (err) {
                res.send('error')
            } else {
                res.send(deniednotif)
            }
        })
    },
    accepted: function (req, res) {
        var acceptedNotif = new notificationModel({
            quotationNum: req.body.quotationNum,
            status: req.body.status,
            content: req.body.content,
            time: req.body.time,
            description1: req.body.description1,
            type: req.body.type,
            seen: req.body.seen,
        })
        acceptedNotif.save((err, acceptednotif) => {
            if (err) {
                res.send('error')
            } else {
                res.send(acceptednotif)
            }
        })
    },
    Seen: function (req, res) {
        notificationModel.findOneAndUpdate({
                seen: 'no'
            }, {
                seen: req.body.seen
            })
            .then(() => {
                notificationModel.findOne({
                    seen: 'no'
                }).then((answer) => {
                    res.send(answer)
                })
            })
    },
    getAll: (req, res) => {
        notificationModel.find({}).sort({
                time: 'desc'
            }).limit(10)
            .then((notifications) => {
                res.send(notifications)
            })
    },

}