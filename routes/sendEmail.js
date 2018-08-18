var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send("Sent Email");
  sendEmail(req);
});
router.get('/', function(req, res, next) {
  res.send("Sent Email");
  sendEmail(req);
});

function sendEmail(req) {
    var senderEmail = req.query.senderEmail;
    var senderPassword = req.query.senderPassword;
    var receiverEmail = req.query.receiverEmail;
    var emailBody = req.query.emailBody;

    console.log(senderEmail);
    console.log(senderPassword);
    console.log(receiverEmail);
    console.log(emailBody);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: senderPassword
      }
    });
    var mailOptions = {
      from: senderEmail,
      to: receiverEmail,
      subject: 'Sending Email using Node.js',
      text: emailBody
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = router;
