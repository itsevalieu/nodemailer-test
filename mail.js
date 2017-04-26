var express = require("express");
var Router = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "itsevalieu@gmail.com",
    pass: "codemore"
  },
  tls: {rejectUnauthorized: false},
  debug: true
});

// Router.get("/send", function(req, res) {
//   console.log("GET to /email/send");
// });

// Router.post("/send", function(req, res) {

  var mailOptions = {
    from: "'ievalieu@gmail.com' <ievalieu@gmail.com>",
    to: "itsevalieu@gmail.com",
    subject: "Test Email",
    text: "Test Email"
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
// });

module.exports = Router;