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
app.use(express.static(path.join(__dirname,"src")));


// Middleware for Routes
// ======================================
// var mail = require("./src/mail.js");
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

console.log("attempting post");
app.post("/api/post", function(req,res) {
	console.log("Sending email...");

	var mailOptions = {
		from: req.body.from,
		to: req.body.to,
		subject: req.body.subject,
		text: req.body.body
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

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

// Listener
// ======================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});