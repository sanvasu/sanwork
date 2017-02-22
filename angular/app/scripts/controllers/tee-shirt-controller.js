/*
---
name: TeeShirtController
...
*/
(function(global, doc, undefined){

	'use strict';

	var TeeShirtController = function($routeParams, ShopFactory, ShoppingBagFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.teeShirt = ShopFactory.getTee(this.teeShirtId);
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		/*
		 * Initialization
         */
		var _init = function() {
			ShopFactory.getTees().then(_onRequestSuccess, _onRequestError);
		};

		this.addItem = function(item, size, color) {
			ShoppingBagFactory.addItem({
				image: item.image,
				name: item.name,
				text: item.text,
				price: item.price,
				uid: item.uid,
				size: size,
				color: color
			});
		};

		// get current tee shirt ID
		this.teeShirtId = parseInt($routeParams.teeShirtId);

		// get optional params
		this.sizeChoice = $routeParams.teeShirtSize;
		this.colorChoice = $routeParams.teeShirtColor;

		// set default model values
		this.errorMessage = false;
		this.teeShirt = {};
		
		_init();

	};

	angular.module('shoppingCart').controller('TeeShirtController', ['$routeParams', 'ShopFactory', 'ShoppingBagFactory', TeeShirtController]);

})(window, document);

