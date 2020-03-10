const notificationController = require('../controllers/notificationController')

const router = require('express').Router()

router.post('/add', notificationController.add)
router.post('/answered', notificationController.answer)
router.post('/denied', notificationController.denied)
router.post('/accepted', notificationController.accepted)
router.get('/list', notificationController.getAll)
router.put('/seen', notificationController.Seen)

module.exports = router