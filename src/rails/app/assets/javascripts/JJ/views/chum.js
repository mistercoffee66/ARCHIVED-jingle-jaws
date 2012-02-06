console.log('foo');
goog.provide("JJ.views.chum");
goog.exportSymbol("JJ.views.chum.Index"); // export view constructors so views can still consume them after minification

goog.require('JJ.managers.SocketManager');

/**
 * @constructor
 */
JJ.views.chum.Index = function() {
    JJ.log('initPresentation');
    console.log('bar');
    this.initPresentation();
	this.initServerEvents();
	this.initClientEvents();
};

// define our prototypes
JJ.views.chum.Index.prototype = {

    initPresentation: function() {

        var self = this;
        this._mainWrap = $('#main-wrap');
		this._videoWrap = $('#video-wrap');
		this._colLeft = $('#col-left');
		this._colRight = $('#col-right');
		this._colMid = $('#col-mid');
		this._controls = $('#controls');
		this._logoWrap = $('#logo-wrap');
        this._theme = document.getElementById('theme');
        this._preLoad = $.Deferred();

        $(self._mainWrap).addClass('loading');
        this.preLoadMedia();
        this._preLoad.done(function(){

            // enable various clicks to turn on classes for testing
//            $(self._mainWrap).removeClass('loading').addClass('intro');
//            $(self._mainWrap).click(function() {
//                $(this).addClass('splash');
//            });
//            $(self._header).click(function() {
//                $(self._mainWrap).addClass('add-theme');
//            });

            self.setVideoSize();
            $(window).resize($.proxy(self.setVideoSize, self));
            $(self._logoWrap).click($.proxy(self.showContentState, self));
        });
	},

    preLoadMedia: function() {

        var self = this,
            audioEl = document.createElement('audio'),
            audioType,
            media,
            i = 0;
        
        if (!!audioEl.canPlayType && audioEl.canPlayType('audio/ogg; codecs="vorbis"')) {
            audioType = '.ogg';
        }
        else if (!!audioEl.canPlayType && audioEl.canPlayType('audio/mpeg')) {
            audioType = '.mp3';
        }

        media = [
            '/audio/jinglejaws' + audioType,
            '/assets/bg-main-grad.jpg',
            '/assets/img-bruce.png',
            '/assets/img-bruce-theme.png',
            '/assets/img-swimmer-male.png',
            '/assets/img-swimmer-female.png',
            '/assets/txt-jaws.png',
            '/assets/moon-bottom.png',
            '/assets/moon-top.png'
        ];

        loader();

        function loader() {
           $(window).load(media[i], function() {
               JJ.log(media[i]);
               i++;
               if ( i < media.length) {
                   loader();
               }
               else {
                    $(self._theme).attr('src', '/audio/jinglejaws' + audioType);
                    self._preLoad.resolve();
               }
            });
        }

    },
	
	setVideoSize: function() {

        JJ.log('setVideoSize');

        var self = this,
            colDims = {
				w: $(self._colMid).width(),
				h: $(self._colMid).height()
			},
			aspectRatio = .75,
			videoDims = {};

        videoDims.w = colDims.w;
        videoDims.h = videoDims.hMax = colDims.h - $(self._controls).height() - $(self._header).height();


        if (colDims.h/colDims.w > aspectRatio) {

            videoDims.h = Math.min( (videoDims.w * aspectRatio), videoDims.hMax);
			JJ.log('too tall, adjust height');
		}
		else if (colDims.h/colDims.w < aspectRatio) {
            videoDims.w = videoDims.h / aspectRatio;
            JJ.log('too wide, adjust width');
		}

        $(self._videoWrap).width(videoDims.w);
        $(self._videoWrap).height(videoDims.h);

	},

    doIntro: function() {

        var self = this;

        self._theme.play();

        // TODO

    },

	showContentState: function() {
        // TODO

	},


	initServerEvents: function() {
		this.sm = new JJ.managers.SocketManager();
		this.bindControls();
	},

	initClientEvents: function() {

	},

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
