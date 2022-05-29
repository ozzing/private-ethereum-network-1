var express = require('express');
var app = express();

var server = app.listen(3000, function(){
  console.log("server is working now")
})

app.get('/', function(req,res){
  res.send('hello world')
})