/*
---
name: ShoppingBagController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ShoppingBagController = function(ShoppingBagFactory) {

		// default models value
		this.items = ShoppingBagFactory.getItems();

	};

	angular.module('shoppingCart').controller('ShoppingBagController', ['ShoppingBagFactory', ShoppingBagController]);

})(window, document);

