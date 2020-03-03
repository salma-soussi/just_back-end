var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/just";

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

var BD = mongoose.connection;

BD.on("error", console.error.bind(console, "mogoDB connection error"));