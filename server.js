// Include Server Dependencies
// ======================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemailer = require("nodemailer");


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
app.use(express.static(path.join(__dirname,"public")));

// Middleware for Routes
// ======================================
// var mail= require("./mail.js");
// app.use("/mail", mail);

var smtpTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "itsevalieu@gmail.com",
		pass: "codemore"
	},
	tls: {rejectUnauthorized: false},
	debug: true
});
app.use("/", function(req, res) {
	console.log("get index");
	res.render("index");
});
app.post("/", function(req,res) {
	var mailOptions = {
		from: req.body.email,
		to: "itsevalieu@gmail.com",
		subject: req.body.subject,
		text: req.body.text
		// from: "'ievalieu@gmail.com' <ievalieu@gmail.com>",
		// to: "itsevalieu@gmail.com",
		// subject: "Test Email",
		// text: "Test Email"
	};

	console.log(mailOptions);

	smtpTransport.sendMail(mailOptions, function(error, response) {
		if(error) {
			console.log(error);
			res.end("error");
		} else {
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});


// Listener
// ======================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});