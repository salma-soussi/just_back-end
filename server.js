const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const db = require("./models/bd");
const userRouter = require("./router/userRouter");
const sellerRouter = require("./router/sellerRouter");
const buyerRouter = require("./router/buyerRouter");

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/user', userRouter)
app.use('/seller', sellerRouter)
app.use('/buyer', buyerRouter)

app.set('secretKey', 'test')
app.use(cors('*'))

// the last line
app.listen(3020, err => {
  if (err) {
    console.log("server is not running");
  } else {
    console.log("server is running on port 3020");
  }
});