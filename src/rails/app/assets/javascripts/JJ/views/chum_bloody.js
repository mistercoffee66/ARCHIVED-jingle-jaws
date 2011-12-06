/*
console.log('chum');

*/
/**
 * @fileOverview animations presentation for jinglejaws
 *//*


var CHUM = CHUM ||

{
	global:
		function() {
			return {
				_devMode: false,
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

		CHUM.log();
        (CHUM.global._mainWrap).addClass('intro');
		$(CHUM.global._mainWrap).show(1, CHUM.setVideoSize);
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


		if ($('#main-wrap.intro').length > 0) {
            CHUM.center(CHUM.global._logoWrap);
            CHUM.center(CHUM.global._shark);
            CHUM.center(CHUM.global._sleigh);
            $(CHUM.global._colMid).css('top', wrapperDims.h);
        }


		$(CHUM.global._colMid).width(wrapperDims.w - gutterWidth);
		CHUM.center(CHUM.global._colMid);

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
		CHUM.center($('#video'), 'vertical');

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
		}, 1000, function() {

			$(CHUM.global._logoWrap).animate({
				width: 390,
				left: 12
			}, 500, function(){
				$(CHUM.global._header).animate({
					height: 157
				});

				$(CHUM.global._tank).animate({
					height: 160
				}, 500);

				$(CHUM.global._shark).animate({
					height: 160,
					width: 160,
					left: 102
				}, 500, function(){

					$('#col-mid').animate({
						top: -140
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

            $(CHUM.global._mainWrap).removeClass('intro');

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

$(CHUM.init);*/
