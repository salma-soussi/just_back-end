const modeController = require("../Controllers/modeController");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images/" })
const router = require("express").Router();

router.post("/add", upload.single("image"), modeController.add);
router.get("/list", modeController.list);
router.get("/getByID/:id", modeController.getByID);
router.delete("/delete/:id", modeController.deleteProduct);
router.put("/update/:id", upload.single("image"), modeController.UpdateProduct);
router.get("/getImage/:avatar", modeController.getFile);
router.post('/upload', upload.single('image'), modeController.Upload);

module.exports = router;