(function() {
	var io,
		activeClient = null, // the client that currently has control of Jingle Jaws and the time it gained control
		controlQueue = [], // list of client ids currently queued for control,
		SECONDS = 1000 * 60,
		TIME_LIMIT = .5*SECONDS;

	JJ.DriveController = function(_io) {
		var self = this;
		io = _io;
		
		io.sockets.on('connection', function(client) {
			self.clientConnect(client);

			client.on('disconnect', function () {
                self.clientDisconnect(client);
            });
		});
	};

	JJ.DriveController.prototype = {
		/**
		 * Connects new clients.
		 * If there are no active clients, starts the main event loop with the new client.
		 * Otherwise, clients are added to the queue.
		 * @param client
		 */
		clientConnect: function(client) {
			// on initial connect, add client to the control queue
			this.queueClient(client);

			// if there are no currently active clients, set this one active and start the event loop
			if (!this.isRunning()) {
				this.run();
			} else { // otherwise, tell the listening client that it's been queued up
				client.emit('requested', {requested: true});
			}
		},

		clientDisconnect: function(client) {
			// remove as activeClient if currently set
			if (this.isActive(client)) {this.setActive(null);}

			// remove client from control queue if present
			this.dequeueClient(client);
		},

		run: function() {
			// if we don't have an active client but there is a client in the queue, load it up
			if (activeClient === null && controlQueue.length > 0) {
				this.setActive(controlQueue[0]);
			}

			// if we have an active client, notify everyone in the queue;
			// expire the active client if it has gone over the time limit;
			if (activeClient) {
				var self = this,
					client = activeClient.client,
					remainingActiveTime = self.getRemainingActiveTime(),
					queuedClient, i;

				// notify the queued clients
				for (i=0; i<controlQueue.length; ++i) {
					queuedClient = controlQueue[i];
					self.notifyQueuedClient(queuedClient, i, remainingActiveTime);
				}

				// if the active client is out of time, kill it and queue up the next one if available
				if (remainingActiveTime <= 0) {
					self.expireClient(client);
				} else {
					client.emit('active', {remainingActiveTime: remainingActiveTime});
				}

				console.log('active client', client.id);
				setTimeout(function() {self.run();}, 1000);
			}
		},

		setActive: function(client) {
			if (typeof client !== 'undefined' && client !== null) {
				activeClient = {
					client: client,
					startTime: Date.now()
				};

				// remove from queue now that it's active
				this.dequeueClient(client);

				// notify client
				client.emit('activated', {active: true});
			} else {
				activeClient = null;
			}
		},

		expireClient: function(client) {
			client.emit('expired', {expired: true});
			this.setActive(null);
		},

		notifyQueuedClient: function(client, idx, remainingActiveTime) {
			var self = this,
				msg = {
					queueLength: idx+1,
					remainingWaitTime: self.getRemainingWaitTime(idx, remainingActiveTime)
				};

			client.emit('queued', msg);
		},

		queueClient: function(client) {
			controlQueue.push(client);
		},

		dequeueClient: function(client) {
			var i, queuedClient;
			for (i in controlQueue) {
				queuedClient = controlQueue[i];
				if (queuedClient.id === client.id) {
					console.log('dequeued client id ', client.id);

					// delete object and remove from the array
					delete controlQueue[i];
					controlQueue.splice(i, 1);

					break;
				}
			}
		},

		getRemainingWaitTime: function(slot, remainingActiveTime) {
			return (slot * TIME_LIMIT) + remainingActiveTime;
		},

		getRemainingActiveTime: function() {
			return TIME_LIMIT - (Date.now() - activeClient.startTime);
		},

		isActive: function(client) { return activeClient !== null && activeClient.client === client; },
		isRunning: function() { return activeClient !== null; }
	};
}());