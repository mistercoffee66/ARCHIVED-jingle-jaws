goog.provide("JJ.views.home");
goog.exportSymbol("JJ.views.home.Index"); // export view constructors so views can still consume them after minification

goog.require('JJ.managers.SocketManager');

/**
 * @constructor
 */
JJ.views.home.Index = function() {
	this.sm = new JJ.managers.SocketManager();
	this.bindControls();
};

// define our prototypes
JJ.views.home.Index.prototype = {
	bindControls: function() {
		var self = this;
		$('#requestControl').click(function() {
			self.requestControl();
		});
	},

	requestControl: function() {
		this.resetView();
		this.sm.reset();
		this.registerSocketListeners();
	},

	resetView: function() {
		$('.control-view').hide();
	},

	registerSocketListeners: function() {
		this.sm.socket.on('requested', this.onRequested);
		this.sm.socket.on('queued', this.onQueued);
		this.sm.socket.on('activated', this.onActivated);
		this.sm.socket.on('active', this.onActive);
		this.sm.socket.on('expired', this.onExpired);
	},

	onRequested: function (data) {
		if (data.requested) {
			$('#queued').fadeIn();
		}
	},

	onQueued: function(data) {
		$('#queueLength').html(data.queueLength);
		$('#queueTimeRemaining').html(Math.round(data.remainingWaitTime/1000));
	},

	onActivated: function(data) {
		if (data.active) {
			console.log('CHOMP! CHOMP!');
			$('#queued').fadeOut(function() {
				$('#activated').fadeIn();
			});
		}
	},

	onActive: function(data) {
		$('#active').html(Math.round(data.remainingActiveTime/1000));
	},

	onExpired: function(data) {
		if (data.expired) {
			$('#activated').fadeOut(function() {
				$('#expired').fadeIn();
			});
		}
	}
};
