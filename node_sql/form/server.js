var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

//support parsing of application/json type post data
app.use(bodyParser.json()); 

app.get('/visitorForm.html', function (req, res) {
   res.sendFile(path.join(__dirname + '/visitorForm.html'));
});

app.listen(8086, function () {
   console.log('app listening  at port 8086');
});









