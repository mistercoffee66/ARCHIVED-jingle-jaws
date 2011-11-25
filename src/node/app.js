JJ = {};

/**
 * Module dependencies.
 */
var express = require('express');
require('./controllers/driveController.js');

var app = express.createServer(),
	io = require('socket.io').listen(app);

// Configuration

app.configure(function(){
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Sockets
new JJ.DriveController(io);




app.listen(1225);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
