const emailmodel = require("../Models/emailmodel");
const nodemailer = require('nodemailer')

module.exports = {


    sendmail: function (req, res) {

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            service: 'gmail',
            auth: {
                user: 'justtn.pfe@gmail.com',
                pass: 'pfe2019-2020'
            }
        });

        var mailOptions = {

            from: ' " salma soussi " <justtn.pfe@gmail.com> ',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,

        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                console.log(mailOptions)
            } else {
                console.log('Email sent: ' + info.response);
                res.json(info)
            }
        })
        transporter.close();

    }

}