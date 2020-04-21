const buyerController = require('../controllers/buyerController')

const multer = require("multer");
const upload = multer({
    dest: __dirname + "/uploads/images/"
})
const router = require('express').Router()

router.post('/add', buyerController.add)
router.get('/list', buyerController.getAll)
router.get('/getByID/:id', buyerController.getByID)
router.delete('/delete/:id', buyerController.delete)
router.put('/update/:id', upload.single("avatar"), buyerController.Update)

module.exports = router