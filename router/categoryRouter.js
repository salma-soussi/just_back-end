const categoryController = require('../controllers/categoryController')

const router = require('express').Router()

router.post('/add', categoryController.add)
router.get('/list', categoryController.list)
router.get('/getByID/:id', categoryController.getByID)
router.delete('/delete/:id', categoryController.delete)
router.put('/update/:id', categoryController.Update)
router.put('/push/:id', categoryController.Push)

module.exports = router