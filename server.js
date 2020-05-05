const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const db = require("./models/bd");
const userRouter = require("./router/userRouter");
const sellerRouter = require("./router/sellerRouter");
const buyerRouter = require("./router/buyerRouter");
const quotationRouter = require("./router/quotationRouter");
const notificationRouter = require("./router/notificationRouter");
const emailRouter = require("./router/emailRouter");
const sectorRouter = require("./router/sectorRouter");
const categoryRouter = require("./router/categoryRouter");
const subcategoryRouter = require("./router/subcategoryRouter");
const productRouter = require("./router/productRouter");

const modeRouter = require("./router/modeRouter");
const informatiqueRouter = require("./router/informatiqueRouter");
const electronicRouter = require("./router/electronicRouter");
const furnitureRouter = require("./router/furnitureRouter");
const sportRouter = require("./router/sportRouter");
const beautyRouter = require("./router/beautyRouter");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('secretKey', 'test')
app.use(cors('*'))

app.use('/user', userRouter)
app.use('/seller', sellerRouter)
app.use('/buyer', buyerRouter)
app.use('/quotation', quotationRouter)
app.use('/notification', notificationRouter)
app.use('/email', emailRouter)
app.use('/sector', sectorRouter)
app.use('/category', categoryRouter)
app.use('/subcategory', subcategoryRouter)
app.use('/product', productRouter)

app.use('/mode', modeRouter)
app.use('/informatique', informatiqueRouter)
app.use('/electronic', electronicRouter)
app.use('/furniture', furnitureRouter)
app.use('/sport', sportRouter)
app.use('/beauty', beautyRouter)



// the last line
app.listen(3020, err => {
  if (err) {
    console.log("server is not running");
  } else {
    console.log("server is running on port 3020");
  }
});