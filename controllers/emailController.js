const emailmodel = require("../Models/emailmodel");
const nodemailer = require('nodemailer')

module.exports = {


    sendmail: function (req, res) {
        console.log(req.body)
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

            from: 'justtn.pfe@gmail.com',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailSeller: req.body.emailSeller,
            phone: req.body.phone,
            address: req.body.address,
            governorate: req.body.governorate,
            html: `
    
            <h3>Informations</h3>
            <p>
            hello,</br>
            our site "just" want to inform you that one of our seller want to have contact with you.These are his information :
            </p>
            <ul>
                <li>First Name: ${req.body.firstName}</li>    
                <li>Last Name: ${req.body.lastName}</li>    
                <li>Email: ${req.body.emailSeller}</li>
                <li>Phone: ${req.body.phone}</li>
                <li>Governorate: ${req.body.governorate}</li>
                <li>Address: ${req.body.address}</li>
            </ul> 
            <h3>Message</h3> 
            <p>${req.body.text}</p>  
            
            `

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