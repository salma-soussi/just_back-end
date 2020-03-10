const nodemailer = require('nodemailer')

module.exports = {
    send: (req, res) => {
        nodemailer.createTestAccount((err, account) => {
            const htmlEmail = `
                <h3 style="color: red">Contact Details:</h3>
                <ul>
                    <li>${req.body.name}</li>
                    <li>${req.body.email}</li>
                </ul>
                <h3>Message:</h3>
                <p>${req.body.message}</p>
            `
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'mason.reinger29@ethereal.email',
                    pass: 'sZvCt4VCzUAg6Ft27D'
                }
            })
            let mailOptions = {
                from: 'test@testing.com',
                to: 'mason.reinger29@ethereal.email',
                replyTo: 'test@testing.com',
                subject: req.body.subject,
                text: req.body.message,
                html: htmlEmail
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
            })
        })
    }

}