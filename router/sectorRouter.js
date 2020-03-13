const sectorController = require('../controllers/sectorController')

const router = require('express').Router()

router.post('/add', sectorController.add)
router.get('/list', sectorController.list)
router.get('/getByID/:id', sectorController.getByID)
router.delete('/delete/:id', sectorController.delete)
router.put('/update/:id', sectorController.Update)
router.put('/push/:id', sectorController.Push)

module.exports = router