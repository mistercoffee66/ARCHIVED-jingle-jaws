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
		this.mainWrap = $('#main-wrap');
		this.videoWrap = $('#video-wrap');
		this.porthole = $('#porthole');
		this.viewport = $('#viewport');
		this.colLeft = $('#col-left');
		this.colRight = $('#col-right');
		this.colMid = $('#col-mid');
		this.controls = $('#controls');
		this.logoWrap = $('#logo-wrap');
		this.ticker = $('#ticker');
		this.tank = $('#tank');
		this.shark = $('#shark');
		this.sleigh = $('#sleigh');
		this.header = $('#header');

		$(this.mainWrap).show(1, $.proxy(this.setVideoSize, this));
		$(window).resize($.proxy(this.setVideoSize));
		$(JJ.logoWrap).click($.proxy(this.showContentState));
	},
	
	setVideoSize: function() {
		var wrapperDims = {
				w: $(this.mainWrap).width(),
				h: $(this.mainWrap).height()
			},
			gutterWidth = $(this.colLeft).width() + $(this.colRight).width(),
			pAspectRatio = 1.148,
			pDims = {},
			vDims = {},
			pMax = {};

		this.center(JJ.logoWrap);
		this.center(this.shark);
		$(this.colMid).width(wrapperDims.w - gutterWidth);
		$(this.colMid).filter('.intro').css('top', wrapperDims.h);
		this.center(this.colMid);

		this.center(this.sleigh);
		
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

		$(this.porthole).width(pDims.w);
		$(this.porthole).height(pDims.h);
		$(this.videoWrap).height(pDims.h);
		$(this.controls).css('top', pDims.h * -.15);

		vDims.w = pDims.w * .84;
		vDims.h = pDims.w * .84;
		vDims.t = pDims.w * .12;

		$(this.viewport).css({
			width: vDims.w,
			height: vDims.h
		});

		this.center(this.viewport);
		this.center($('video'), 'vertical');

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
		$(this.sleigh).animate({
			left: $(this.ticker).width() + 150
		}, 1000, function() {

			$(JJ.logoWrap).animate({
				width: 390,
				left: 102
			}, 500, function(){
				$(this.header).animate({
					height: 157
				});

				$(this.tank).animate({
					height: 160
				}, 500);

				$(this.shark).animate({
					height: 160,
					width: 160,
					left: 102
				}, 500, function(){

					$('#col-mid.intro').removeClass('intro').animate({
						top: -140
					});
					$(this.ticker).css({
						width: '80%',
						top: 'auto',
						bottom: 10,
						left: 262
					});
					this.doTicker();
				});
			});
		});
	},

	doTicker: function() {
		$('#ticker-content').html('Well, shake it up, baby, now, (shake it up, baby) Twist and shout. (twist and shout) Cmon cmon, cmon, cmon, baby, now, (come on baby) Come on and work it on out. (work it on out)');
		$(this.sleigh).addClass('flip').animate({
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
