var module = angular.module('shoppingCart', ['ngRoute']);

(function(global, doc, undefined){

	'use strict';

	var RouteConfig = function($routeProvider) {

		$routeProvider
		.when('/phones', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'Products'
		}).when('/watches', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'Products'
		}).when('/handbags', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'Products'
		}).when('/dresses', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'Products'
		})
		.when('/tee-shirt/:teeShirtId/:teeShirtSize?/:teeShirtColor?', {
			templateUrl: 'views/tee-shirt-view.html',
			controller: 'TeeShirtController',
			controllerAs: 'Product'
		})
		.when('/shopping-bag', {
			templateUrl: 'views/shopping-list-view.html',
			controller: 'ShoppingListController',
			controllerAs: 'ShoppingList'
		})
		.when('/checkout', {
			templateUrl: 'views/checkout-view.html'
		})
		.when('/landing', {
			templateUrl: 'views/product-categories.html'
		})
		.otherwise({
			redirectTo: '/landing'
		});

	};

	angular.module('shoppingCart').config(['$routeProvider', RouteConfig]);

})(window, document);
