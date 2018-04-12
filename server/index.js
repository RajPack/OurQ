//Initialization...

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes/index');

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

// Listen for requests
var server = app.listen(app.get('port'), function() {
  });
