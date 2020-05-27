const productController = require("../Controllers/productController");
const multer = require("multer");
const upload = multer({ dest:    + "/uploads/images/" })
const router = require("express").Router();

router.post("/add", upload.single("image"), productController.add);
router.get("/list", productController.list);
router.get("/getByID/:id", productController.getByID);
router.delete("/delete/:id", productController.deleteProduct);
router.put("/update/:id", upload.single("image"), productController.UpdateProduct);
router.get("/getImage/:avatar", productController.getFile);
router.post('/upload', upload.single('image'), productController.Upload);

module.exports = router;