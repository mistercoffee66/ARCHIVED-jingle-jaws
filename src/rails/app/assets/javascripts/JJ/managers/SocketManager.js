goog.provide("JJ.managers.SocketManager");

/**
 * @constructor
 */
JJ.managers.SocketManager = function() {
	this.conn_str = JJ.NODE_NAME + ':' + JJ.NODE_PORT;
};

JJ.managers.SocketManager.prototype = {
	reset: function() {
		if (this.socket) { this.socket.disconnect(); }
		this.socket = io.connect(this.conn_str);
	}
};