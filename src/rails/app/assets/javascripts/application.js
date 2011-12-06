// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery_ujs

// Define everything in our parent namespace.  These will effectively be our "globals", access via the JJ namespace.
goog.provide('JJ');

JJ.NODE_NAME = 'dev.jinglejaws.net';
JJ.NODE_PORT = '1225';
JJ.DEV_MODE = true;

JJ.log = function(msg) {
	if (JJ.DEV_MODE) {
		console.log(msg);
	}
};

// Require any other entry points into the app
goog.require('JJ/views/chum');
