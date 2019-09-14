// dependencies
var express = require("express");
var path = require("path");

// setting up express
var app = express();
var PORT = process.env.PORT || 3000;

// setting up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// start the server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
