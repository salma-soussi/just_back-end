const emailController = require('../controllers/emailController')

const router = require('express').Router()

router.post('/send', emailController.send)

module.exports = router