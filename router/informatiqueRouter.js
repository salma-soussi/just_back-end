const infoController = require("../Controllers/informatiqueController");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images/" })
const router = require("express").Router();

router.post("/add", upload.single("image"), infoController.add);
router.get("/list", infoController.list);
router.get("/getByID/:id", infoController.getByID);
router.delete("/delete/:id", infoController.deleteProduct);
router.put("/update/:id", upload.single("image"), infoController.UpdateProduct);
router.get("/getImage/:avatar", infoController.getFile);
router.post('/upload', upload.single('image'), infoController.Upload);

module.exports = router;