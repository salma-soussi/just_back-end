const userController = require('../controllers/userController')

const router = require('express').Router()

router.post('/add', userController.add)
router.get('/list', userController.getAll)
router.get('/getByID/:id', userController.getByID)
router.delete('/delete/:id', userController.deleteUser)
router.put('/update/:id', userController.UpdateUser)
router.post('/authentication', userController.Authentication)

module.exports = router