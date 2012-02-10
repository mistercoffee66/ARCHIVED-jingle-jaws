goog.provide("JJ.views.chum");
goog.exportSymbol("JJ.views.chum.Index"); // export view constructors so views can still consume them after minification

goog.require('JJ.managers.SocketManager');

/**
 * @constructor
 */
JJ.views.chum.Index = function() {
    JJ.log('initPresentation');
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
		this._colMid = $('#col-mid');
		this._controls = $('#controls');
        this._theme = document.getElementById('theme');
        this._preLoad = $.Deferred();
        this._enter = $('#enter');
        this._userName = $('#user-name');
        this._userMsg = $('#user-msg');
        this._submitMsg = $('#submit-msg');
        this._overlay = $('#overlay');


        if (this.noSharkForYou()) {
            $(self._mainWrap).addClass('no-support');
        }

        else {

            $(self._mainWrap).addClass('loading');
            this.preLoadMedia();
            this._preLoad.done(function(){

                // enable various clicks to turn on classes for testing
                $(self._mainWrap).click(function() {
                    $(this).addClass('splash');
                });
                $('#header').click(function() {
                    $(self._mainWrap).addClass('add-theme');
                });
                $('#tank').click(function() {
                    self.showContentState();
                }); // end testing clicks

                self.doIntro();

            });

        }
	},

    noSharkForYou: function() {

        return navigator.userAgent.search(/applewebkit/gi) == -1;

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

        JJ.log(colDims);

        videoDims.w =
            colDims.w -
            parseInt($(self._videoWrap).css('paddingLeft')) -
            parseInt($(self._videoWrap).css('paddingRight'));
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

        $(self._overlay).css( 'line-height', $(self._mainWrap).height() + 'px' );

	},

    doIntro: function() {

        var self = this;

        self._theme.play();
        $(self._mainWrap).on('webkitAnimationEnd', function(){

            if ($(this).hasClass('add-theme')) {
                self.showContentState();
            }
            else if ($(this).hasClass('splash')) {
                $(this).addClass('add-theme');
            }
            else if ($(this).hasClass('intro')) {
                $(this).addClass('splash');
            }

        });

        $(self._mainWrap).removeClass('loading').addClass('intro');


    },

	showContentState: function() {

        var self = this;

        $(self._mainWrap).attr('class', '');
        self.setVideoSize();

        $('a').click(function(e){
            e.preventDefault();
            console.log(this + ' click');
        });

        // username input
        $(self._userName).focus(function(){

            $(this).addClass('active');

            if ($(this).val() == 'name') {
                $(this).val('');
            }

        });

        $(self._userName).keyup(function(){

            if ( ($(this).val() == '') || ($(this).val() == 'name') ) {
                $(self._enter).removeClass('active');
            }
            else {
                $(self._enter).addClass('active');
            }

        });

        $(self._userName).blur(function(){

            if ( ($(this).val() == '') || ($(this).val() == 'name') ) {
                $(this).val('name');
                $(this).removeClass('active');
            }

        });

        // user message input
        $(self._userMsg).focus(function(){

            $(this).addClass('active');

            if ($(this).val() == 'your Valentine message') {
                $(this).val('');
            }

        });

        $(self._userMsg).keyup(function(){

            if ( ($(this).val() == '') || ($(this).val() == 'your Valentine message') ) {
                $(self._submitMsg).removeClass('active');
            }
            else {
                $(self._submitMsg).addClass('active');
            }

        });

        $(self._userMsg).blur(function(){

            if ( ($(this).val() == '') || ($(this).val() == 'your Valentine message') ) {
                $(this).val('your Valentine message');
                $(this).removeClass('active');
                JJ.log('reset');
            }

        });

        $('#enter').bind('click', function() {

            JJ.log('do countdown');
            self.doCountdown();
        });

        $(self._submitMsg).bind('click', function() {

            JJ.log('send message');
            self.sendMessage();
        });

	},


    doCountdown: function() {

        var self = this,
            i = 9,
            t;

        $(self._overlay).addClass('active');

        t = setInterval(function(){

            if (i < 1) {

                clearInterval(t);
                $(self._overlay).removeClass('active').removeClass('blink');
            }

            else {

                if (i == 3) {
                    $(self._overlay).addClass('blink');
                }

                $(self._overlay).find('span').text(i);
                i = i - 1;
            }


        }, 1000);

    },

    sendMessage: function() {

        var self = this,
            message = $(self._userMsg).val().replace(/\s/gi, ',');

        $.get('http://10.29.47.63:2000/?t=|' + message + '|');
        JJ.log(message);

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
