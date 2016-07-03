'use strict';

var env = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./app/routes/notes_route');

routes(router);


var port = process.env.PORT || 8080;
app.listen(port, function(err){
  if(err){
    return err;
  }
  console.log("Server started on port" + port);
});

var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
  res.json({message:"Welcome"})	
});

app.use('/api', router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/noteapp');




module.exports = app;