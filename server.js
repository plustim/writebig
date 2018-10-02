var express = require("express");
var app = express();
var mongoose = require("mongoose");

var http = require("http").Server(app);
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

app.use(express.static("view"));
app.use(bodyParser.urlencoded({ extended: false }));

var db = process.env.MONGODB_URI || "mongodb://localhost/writebig";

mongoose.connect(db, {useNewUrlParser: true}, function(error) {
  if (error) console.log(error);
  else console.log("Mongoose connected.");
});

// routes
var routes = require("./controller/bigController.js");

app.use("/", routes);

http.listen(port);