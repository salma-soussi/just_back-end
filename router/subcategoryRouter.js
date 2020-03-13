const subcategoryController = require('../controllers/subcategoryController')

const router = require('express').Router()

router.post('/add', subcategoryController.add)
router.get('/list', subcategoryController.list)
router.get('/getByID/:id', subcategoryController.getByID)
router.delete('/delete/:id', subcategoryController.delete)
router.put('/update/:id', subcategoryController.Update)
router.put('/push/:id', subcategoryController.Push)

module.exports = router