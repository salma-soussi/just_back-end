const electronicController = require("../Controllers/electronicController");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images/" })
const router = require("express").Router();

router.post("/add", upload.single("image"), electronicController.add);
router.get("/list", electronicController.list);
router.get("/getByID/:id", electronicController.getByID);
router.delete("/delete/:id", electronicController.deleteProduct);
router.put("/update/:id", upload.single("image"), electronicController.UpdateProduct);
router.get("/getImage/:avatar", electronicController.getFile);
router.post('/upload/:id', upload.single('image'), electronicController.Upload);

module.exports = router;