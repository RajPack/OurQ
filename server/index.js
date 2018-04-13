//Initialization...

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var routes = require('./api/routes/index');
var https = require("https");

// Define the port to run on
app.set('port', 5000);

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
  });

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// Add some routing
app.use('/api', routes);

app.get("/", function(req, res){

  res.send("<h1>hello<h2>");
  
  });
  
  var options = {
  
  key: fs.readFileSync("insteadq.key"),
  
  cert: fs.readFileSync("insteadq.cert")
  
  }
  
var server = https.createServer(options, app);
console.log("Listen to 5000");
server.listen(5000);

// Listen for requests
//var server = app.listen(app.get('port'), function() {
 // });
