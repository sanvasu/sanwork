/*
---
name: lengthFilter
...
*/
(function (global, doc, undefined) {

	'use strict';

	var lengthFilter = function() {
		return function(collection) {
			return collection ? collection.length : null;
		};
	};

	angular.module('shoppingCart').filter('lengthFilter', lengthFilter);

})(window, document);