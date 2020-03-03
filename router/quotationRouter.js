const quotationController = require('../controllers/quotationController')

const router = require('express').Router()

router.post('/add', quotationController.add)
router.get('/list', quotationController.getAll)
router.get('/getByID/:id', quotationController.getByID)
router.delete('/delete/:id', quotationController.delete)
router.put('/update/:id', quotationController.Update)

module.exports = router