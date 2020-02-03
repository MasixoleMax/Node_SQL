const {addNewVisitor, visitorInfo, listAllVisitors, removeById, update, removeAll, viewVisitor} = require('../visitors');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// use bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// load vivsitors form statically in browser  
app.use(express.static(path.resolve(__dirname, '/form'))); 

// load View Engine and pug
app.set('/form', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// url routing to view the visitor's form in browser
app.get('/visitorForm', (req, res) => {
res.sendFile(path.join(__dirname + '/visitorForm.html'));
});

// serving the new html form as static 
app.get('/single-page-app', (req, res) => {
   res.sendFile(path.join(__dirname + '/newForm.html'));
 });

// add a new visitor to database from visitor's form
app.post('/userData', (req, res) => {
   let params = req.body; 
   const info = visitorInfo(params.visitor_name);

   addNewVisitor(params.visitor_name, params.age, params.date, params.time, params.your_name, params.comments);
   res.send("Thanks for the info! The following information was saved into the database: " + JSON.stringify(info));
});

// delete a visistor by id
app.delete('/userData', (req, res) => {
   const id = parseInt(req.params.id);
   removeById(id);
});

// delete all visitors
app.delete('/userData', (req, res) => {
   removeAll();
});

// testass
app.post('/test', (req, res) => {
   console.log(req.body);
   
   res.json({
      testString:  "ThankYou"
   })
});

// view all visitors
app.get('/userData', (req, res) => {
   listAllVisitors();
});

// view a single visitor by id
app.get('/userData', (req, res) => {
   const id = parseInt(req.params.id);
   viewVisitor(id);
});

// updateVisitor:id
app.get('/userData', (req, res) => {
   const id = parseInt(req.params.id);
   update(id);
});

// listen to port 8086
app.listen(8086, () => {
   console.log('app listening  at port 8086');
});
