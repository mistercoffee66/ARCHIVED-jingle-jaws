/**
 * @fileOverview animations presentation for jinglejaws
 */

var CHUM = CHUM ||

{
	global:
		function() {
			return {
				_devMode: true,
				_mainWrap: $('#main-wrap'),
				_videoWrap: $('#video-wrap'),
				_porthole: $('#porthole'),
				_viewport: $('#viewport'),
				_colLeft: $('#col-left'),
				_colRight: $('#col-right'),
				_colMid: $('#col-mid'),
				_controls: $('#controls'),
				_logoWrap: $('#logo-wrap'),
				_ticker: $('#ticker'),
				_tank: $('#tank'),
				_shark: $('#shark'),
				_sleigh: $('#sleigh'),
				_header: $('#header')
			};
		}(),

	init: function() {

		$(CHUM.log);
		$(CHUM.setVideoSize);
		$(window).resize(CHUM.setVideoSize);
		$(CHUM.global._logoWrap).click(CHUM.showContentState);
	},

	setVideoSize: function() {

		var wrapperDims = {
				w: $(CHUM.global._mainWrap).width(),
				h: $(CHUM.global._mainWrap).height()
			},
			gutterWidth = $(CHUM.global._colLeft).width() + $(CHUM.global._colRight).width(),
			pAspectRatio = 1.148,
			pDims = {},
			vDims = {},
			pMax = {};


		$(CHUM.global._colMid).width(wrapperDims.w - gutterWidth);
		CHUM.center(CHUM.global._colMid);

		CHUM.center(CHUM.global._sleigh);
		
		pMax.w = wrapperDims.w - gutterWidth;
		pMax.h = wrapperDims.h - 80;
		CHUM.log(pMax);

		pDims = pMax;

		if (pMax.w/pMax.h > pAspectRatio) {
			pDims.w = pMax.h * pAspectRatio;
			CHUM.log('too wide, adjust width');
		}
		else if (pMax.w/pMax.h < pAspectRatio) {
			pDims.h = pMax.w / pAspectRatio;
			CHUM.log('too tall, adjust height');
		}

		CHUM.log(pDims);

		$(CHUM.global._porthole).width(pDims.w);
		$(CHUM.global._porthole).height(pDims.h);
		$(CHUM.global._videoWrap).height(pDims.h);
		$(CHUM.global._controls).css('top', pDims.h * -.15);

		vDims.w = pDims.w * .84;
		vDims.h = pDims.w * .84;
		vDims.t = pDims.w * .12;

		$(CHUM.global._viewport).css({
			width: vDims.w,
			height: vDims.h
		});

		CHUM.center(CHUM.global._viewport);
		CHUM.center($('video'), 'vertical');

	},

	center: function(ele, dim, context) {

		context = context || $(ele).parent();
		dim = dim || 'horizontal';

		switch(dim) {
			case 'vertical' : CHUM.log($(ele)); $(ele).css('top', ($(context).height() - $(ele).height()) / 2); break;
			case 'horizontal' : $(ele).css('left', ($(context).width() - $(ele).width()) / 2); break;
		}

	},

	showContentState: function() {



		$(CHUM.global._sleigh).animate({
			left: $(CHUM.global._ticker).width() + 150
		}, 2000, function() {

			$(CHUM.global._logoWrap).animate({
				width: 390,
				marginLeft: 102
			}, 1000, function(){
				$(CHUM.global._header).css({
					height: 157,
					backgroundPosition: '0 -40px'
				});

				$(CHUM.global._tank).animate({
					height: 160
				}, 1000);

				$(CHUM.global._shark).animate({
					height: 160,
					width: 160,
					marginLeft: 102
				}, 1000, function(){

					$('.content-col').css({
						visibility: 'visible',
						opacity: 1
					});
					$(CHUM.global._ticker).css({
						width: '80%',
						top: 'auto',
						bottom: 10,
						left: 262
					});
					CHUM.doTicker();
				});
			});

		});
	},

	doTicker: function() {
		$('#ticker-content').html('Well, shake it up, baby, now, (shake it up, baby) Twist and shout. (twist and shout) Cmon cmon, cmon, cmon, baby, now, (come on baby) Come on and work it on out. (work it on out)');
		$(CHUM.global._sleigh).addClass('flip').animate({
			left: -150
		}, 10000);
	},

	log: function(msg) {
		if (CHUM.global._devMode) {
			console.log(msg);
		}
	}
};

$(CHUM.init);