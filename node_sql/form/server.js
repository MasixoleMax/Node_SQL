const {addNewVisitor, visitorInfo} = require('../visitors');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, '/form'))); 

//load View Engine
app.set('/form', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/visitorForm', (req, res) => {
res.sendFile(path.join(__dirname + '/visitorForm.html'));
});

app.post('/userData', (req, res) => {
   const params = req.body;
   const info = visitorInfo(params.visitor_name);

   addNewVisitor(params.visitor_name, params.age, params.date, params.time, params.your_name, params.comments);
   res.send("Thanks for the info! The following information was saved into the database: " + JSON.stringify(info));
});

app.listen(8086, () => {
   console.log('app listening  at port 8086');
});






