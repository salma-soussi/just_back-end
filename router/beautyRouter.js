const beautyController = require("../Controllers/beautyController");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images/" })
const router = require("express").Router();

router.post("/add", upload.single("image"), beautyController.add);
router.get("/list", beautyController.list);
router.get("/getByID/:id", beautyController.getByID);
router.delete("/delete/:id", beautyController.deleteProduct);
router.put("/update/:id", upload.single("image"), beautyController.UpdateProduct);
router.get("/getImage/:avatar", beautyController.getFile);
router.post('/upload/:id', upload.single('image'), beautyController.Upload);

module.exports = router;