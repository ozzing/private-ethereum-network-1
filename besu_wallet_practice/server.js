var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.get('/deploy', function(req,res){
  res.sendFile(__dirname + "/deploy.html")
})


var server = app.listen(3000, function(){
  console.log("server is working now")
})
