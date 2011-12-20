goog.provide("JJ.views.chum");
goog.exportSymbol("JJ.views.chum.Index"); // export view constructors so views can still consume them after minification

goog.require('JJ.managers.SocketManager');

/**
 * @constructor
 */
JJ.views.chum.Index = function() {
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
		this._porthole = $('#porthole');
		this._viewport = $('#viewport');
		this._colLeft = $('#col-left');
		this._colRight = $('#col-right');
		this._colMid = $('#col-mid');
		this._controls = $('#controls');
		this._logoWrap = $('#logo-wrap');
		this._ticker = $('#ticker');
		this._tank = $('#tank');
		this._shark = $('#shark');
		this._sleigh = $('#sleigh');
		this._header = $('#header');
        this._durationFactor = .88;
        this._theme = document.getElementById('theme');
        this._preLoad = $.Deferred();

		this.preLoadMedia();
        this._preLoad.done(function(){
            $(self._mainWrap).addClass('intro splash').show(1, $.proxy(self.setVideoSize, self));
            self.doSplash();
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
            '/assets/bg-trees-tile.png',
            '/assets/img-bruce.png',
            '/assets/img-sleigh-ltr.png',
            '/assets/txt-jaws.png',
            '/assets/txt-jingle.png'
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
		var wrapperDims = {
				w: $(this._mainWrap).width(),
				h: $(this._mainWrap).height()
			},
			gutterWidth = $(this._colLeft).width() + $(this._colRight).width(),
			pAspectRatio = 1.148,
			pDims = {},
			vDims = {},
			pMax = {};

		if ($(this._mainWrap).hasClass('intro')) {
            this.center(this._logoWrap);
            this.center(this._shark);
            this.center(this._sleigh);
            $(this._colMid).css('top', wrapperDims.h);
        }

		$(this._colMid).width(wrapperDims.w - gutterWidth);
		this.center(this._colMid);
		
		pMax.w = wrapperDims.w - gutterWidth;
		pMax.h = wrapperDims.h - 80;
		JJ.log(pMax);

		pDims = pMax;

		if (pMax.w/pMax.h > pAspectRatio) {
			pDims.w = pMax.h * pAspectRatio;
			JJ.log('too wide, adjust width');
		}
		else if (pMax.w/pMax.h < pAspectRatio) {
			pDims.h = pMax.w / pAspectRatio;
			JJ.log('too tall, adjust height');
		}

		JJ.log(pDims);

		$(this._porthole).width(pDims.w);
		$(this._porthole).height(pDims.h);
		$(this._videoWrap).height(pDims.h);
		$(this._controls).css('top', pDims.h * -.15);

		vDims.w = pDims.w * .84;
		vDims.h = pDims.w * .84;
		vDims.t = pDims.w * .12;

		$(this._viewport).css({
			width: vDims.w,
			height: vDims.h
		});

		this.center(this._viewport);
		this.center($('video'), 'vertical');

	},

    doSplash: function() {

        var self = this;

        self._theme.play();
        $(this._mainWrap).animate({
            opacity : 1
        }, 6000*self._durationFactor, function(){
            $(self._shark).animate({
                bottom: 0
            }, 6000*self._durationFactor, function(){
              $('#logo-jaws').animate({
                  height: '80%'
              }, 6000*self._durationFactor, function(){
                  $(self._mainWrap).removeClass('splash');
                  self.showContentState();
              });
            });
        });
    },

	center: function(ele, dim, context) {
		context = context || $(ele).parent();
		dim = dim || 'horizontal';

		switch(dim) {
			case 'vertical' : JJ.log($(ele)); $(ele).css('top', ($(context).height() - $(ele).height()) / 2); break;
			case 'horizontal' : $(ele).css('left', ($(context).width() - $(ele).width()) / 2); break;
		}
	},

	showContentState: function() {

        var self = this;

        $(this._sleigh).delay(2000*self._durationFactor).animate({
			left: $(this._ticker).width() + 150
		}, 1000, function() {
            JJ.log('done');
			$(self._logoWrap).animate({
				width: 390,
				left: 102
			}, 500, function(){
				$(self._header).animate({
					height: 157
				});

				$(self._tank).animate({
					height: 160
				}, 500);

				$(self._shark).animate({
					height: 160,
					width: 160,
					left: 102
				}, 500, function(){

					$('.intro #col-mid').animate({
						top: -140
					});
					$(self._ticker).css({
						width: '80%',
						top: 'auto',
						bottom: 10,
						left: 262
					});
					self.doTicker();
                    $(self._mainWrap).removeClass('intro');
				});
			});
		});
	},

	doTicker: function() {
		$('#ticker-content').html('Well, shake it up, baby, now, (shake it up, baby) Twist and shout. (twist and shout) Cmon cmon, cmon, cmon, baby, now, (come on baby) Come on and work it on out. (work it on out)');
		$(this._sleigh).addClass('flip').animate({
			left: -150
		}, 10000);
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
