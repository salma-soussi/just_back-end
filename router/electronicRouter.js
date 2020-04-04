const electronicController = require("../Controllers/electronicController");
const multer = require("multer");
const upload = require('../middlwore/upload')
const router = require("express").Router();

router.post("/add", upload.array('image',5), electronicController.add);
router.get("/list", electronicController.list);
router.get("/getByID/:id", electronicController.getByID);
router.delete("/delete/:id", electronicController.deleteProduct);
router.put("/update/:id", upload.single("image"), electronicController.UpdateProduct);
router.get("/getImage/:avatar", electronicController.getFile);
router.post('/upload/:id', upload.single('image'), electronicController.Upload);

module.exports = router;