const sportController = require("../Controllers/sportController");
const multer = require("multer");
const upload = require('../middlwore/upload')
const router = require("express").Router();

router.post("/add", upload.array('image', 5), sportController.add);
router.get("/list", sportController.list);
router.get("/getByID/:id", sportController.getByID);
router.delete("/delete/:id", sportController.deleteProduct);
router.put("/update/:id", upload.single("image"), sportController.UpdateProduct);
router.get("/getImage/:avatar", sportController.getFile);
router.post('/upload/:id', upload.single('image'), sportController.Upload);

module.exports = router;