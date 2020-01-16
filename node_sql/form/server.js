var addNewVisitor = require('../visitors');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '/form'))); 

app.get('/visitorForm', function (req, res) {
   res.sendFile(path.join(__dirname + '/visitorForm.html'));
});

app.post('/userData', function (req, res) {
   const params = req.body;
   addNewVisitor(params.visitor_name, params.age, params.date, params.time, params.your_name, params.comments);
   res.send("Thanks for the info! The following was saved to the database " + JSON.stringify(params));
});

app.listen(8086, function () {
   console.log('app listening  at port 8086');
});







