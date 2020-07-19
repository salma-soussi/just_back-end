const buyerController = require('../controllers/buyerController')
const upload = require('../middlwore/upload')
const multer = require("multer");


const router = require('express').Router()

router.post('/add', buyerController.add)
router.get('/list', buyerController.getAll)
router.get('/getByID/:id', buyerController.getByID)
router.delete('/delete/:id', buyerController.delete)
router.put('/update/:id', buyerController.Update)
router.get("/getImage/:avatar", buyerController.getfile);
router.post('/upload/:id', upload.single('avatar'), buyerController.Upload);
router.post('/authentication', buyerController.Authentication)


module.exports = router