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
				_colRight: $('#col-right')
			};
		}(),

	init: function() {

		$(CHUM.log);
		$(CHUM.setVideoSize);
	},

	setVideoSize: function() {

		var wrapperDims = {
				w: $(CHUM.global._mainWrap).width(),
				h: $(CHUM.global._mainWrap).height()
			},
			colWidth = $(CHUM.global._colLeft).width() + $(CHUM.global._colRight).width(),
			pAspectRatio = 1.148,
			vAspectRatio = 1.333,
			pDims = {},
			vDims = {}
			pMax = {},
			vMax = {};


		pMax.w = wrapperDims.w - colWidth;
		pMax.h = wrapperDims.h - 40;
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

		vDims.w = pDims.w * .840;
		vDims.h = pDims.h * .739;

		$(CHUM.global._viewport).width(vDims.w);
		$(CHUM.global._viewport).height(vDims.h);
		$(CHUM.global._viewport).css({
			left: ( $(CHUM.global._videoWrap).width() - vDims.w ) / 2
		});

	},

	log: function(msg) {
		if (CHUM.global._devMode) {
			console.log(msg);
		}
	}
};

$(CHUM.init);