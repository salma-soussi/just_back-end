const router = require('express').Router()
const emailController = require('../Controllers/emailController')

router.post('/send',emailController.sendmail )
    
module.exports = router ;