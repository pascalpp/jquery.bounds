/*
$.bounds
jquery helper for getBoundingClientRect
2015-04-05 pascal
v1.0.0
*/
(function(root, factory) {
	// Set up appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], function($) {
			factory($);
		});

	// or, using global jquery
	} else {
		factory((root.jQuery || root.Zepto || root.ender || root.$));
	}

}(this, function($) {
	'use strict';

	var $window = $(window);

	$.fn.bounds = function(options) {
		var bounds,
			el = this.get(0);

		if (el && el.getBoundingClientRect) {
			options = options || {
				origin: 'document' // or 'viewport'
			};

			var rect = el.getBoundingClientRect(),
				scrollLeft = 0,
				scrollTop = 0;

			// rect[top, bottom, left, right] are relative to the viewport
			// we almost always want to know the position relative to the top of the document
			// so we add the scroll top amount if origin is 'document' (default)

			if (options.origin === 'document') {
				scrollLeft = $window.scrollLeft();
				scrollTop = $window.scrollTop();
			}

			// getBoundingClientRect returns a read-only object, so we clone it
			// $.clone chokes on this object for some reason, so we make an object literal copy

			bounds = {
				top: rect.top + scrollTop,
				bottom: rect.bottom + scrollTop,
				left: rect.left + scrollLeft,
				right: rect.right + scrollLeft,
				height: rect.height,
				width: rect.width,
			};
		}
		return bounds;
	};

}));
