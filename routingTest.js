var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public/html'))); // Use public for static serving

// respond with "hello world" when a GET request is made to the homepage
app.post('/sendEmail.js', function (req, res) {
  res.send('Sent Email');
});

module.exports = app;
