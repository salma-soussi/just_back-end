const sellerController = require('../controllers/sellerController')

const multer = require("multer");
const upload = multer({
    dest: __dirname + "/uploads/images/"
})

const router = require('express').Router()

router.post('/add', upload.single("avatar"), sellerController.add)
router.get('/list', sellerController.getAll)
router.get('/getByID/:id', sellerController.getByID)
router.delete('/delete/:id', sellerController.delete)
router.put('/update/:id', sellerController.Update)
router.get("/getImage/:avatar", sellerController.getfile);
router.post('/upload/:id', upload.single('avatar'), sellerController.Upload);

module.exports = router