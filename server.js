// Include Server Dependencies
// ======================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create Instance of Express
// ======================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set Up Express App to Handle Data Parsing
// -------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Middleware for Routes
// ======================================
var mail= require("./mail.js");
app.use("/mail", mail);

// Listener
// ======================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});