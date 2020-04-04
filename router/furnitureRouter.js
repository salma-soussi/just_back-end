const furnitureController = require("../Controllers/furnitureController");
const multer = require("multer");
const upload = require('../middlwore/upload')
const router = require("express").Router();

router.post("/add", upload.array('image',5), furnitureController.add);
router.get("/list", furnitureController.list);
router.get("/getByID/:id", furnitureController.getByID);
router.delete("/delete/:id", furnitureController.deleteProduct);
router.put("/update/:id", upload.single("image"), furnitureController.UpdateProduct);
router.get("/getImage/:avatar", furnitureController.getFile);
router.post('/upload/:id', upload.single('image'), furnitureController.Upload);

module.exports = router;