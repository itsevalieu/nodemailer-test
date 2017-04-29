var express = require("express");
var axios = require("axios");
// var Router = express.Router();
var nodemailer = require("nodemailer");
var fs = require("fs");

var mail = {
  getMail: function() {
    return axios.get("/api/get");
  },
  sendMail: function(mail) {
    console.log("Sending Mail from helper");
    return axios.post("/api/post", {
      from: mail.from,
      to: mail.to,
      subject: mail.subject,
      body: mail.body
    });
  }
};

module.exports = mail;
// var smtpTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "itsevalieu@gmail.com",
//     pass: "codemore"
//   },
//   tls: {rejectUnauthorized: false},
//   debug: true
// });

// Router.get("/", function(req, res) {
//   console.log("GET to send");
// });

// Router.post("/send", function(req, res) {
//   console.log("Sending email...");
//   var mailOptions = {
//     from: "'ievalieu@gmail.com' <ievalieu@gmail.com>",
//     to: "itsevalieu@gmail.com",
//     subject: "Test Email",
//     text: "Test Email"
//   };

//   console.log(mailOptions);

//   smtpTransport.sendMail(mailOptions, function(error, response) {
//     if(error) {
//       console.log(error);
//       res.end("error");
//     } else {
//       console.log("Message sent: " + response.message);
//       res.end("sent");
//     }
//   });
// });

// module.exports = Router;