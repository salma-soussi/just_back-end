const userController = require('../controllers/userController')

const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images/" })
const router = require('express').Router()

router.post('/add', userController.add)
router.get('/list', userController.getAll)
router.get('/getByID/:id', userController.getByID)
router.delete('/delete/:id', userController.deleteUser)
router.put('/update/:id', upload.single("avatar"), userController.UpdateUser)
router.post('/authentication', userController.Authentication)

module.exports = router