var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req,res){
  res.render('index.jade');
});

var server = app.listen(3000, function(){
  console.log('our application run at http://localhost:3000')
});