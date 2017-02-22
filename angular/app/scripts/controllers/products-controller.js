/*
---
name: ProductsController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ProductsController = function($scope, SelectorsFactory, ShopFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.tees = ShopFactory.tees;
			this.teeSizes = ShopFactory.getSizes();
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		var _init = function() {
			ShopFactory.getTees().then(_onRequestSuccess, _onRequestError);
		};

		this.sizeFilter = SelectorsFactory.getElement('#all-sizes').value;
		this.priceFilter = SelectorsFactory.getElement('#all-prices').value;

		$scope.defaultSize = this.sizeFilter;
		$scope.defaultPrice = this.priceFilter;
         $scope.getValue=function(val){
         alert(val);
	     }
		this.tees = [];
		this.teeSizes = [];
		this.errorMessage = false;

		_init();

	};

	angular.module('shoppingCart').controller('ProductsController', ['$scope', 'SelectorsFactory', 'ShopFactory', ProductsController]);
	angular.module('shoppingCart').controller('ctrl', function($scope, $rootScope, $http, $routeParams) {
		
    $rootScope.dum = function(x) {
//window.location.reload(); 		
	$rootScope.cat = x;
	
	}
	$rootScope.dum1 = function(x) { 
	//window.location.reload(); 
	$rootScope.cat = x;

	}
	$rootScope.dum2 = function(x) { 
	$rootScope.cat = x;

	}
	$rootScope.dum3 = function(x) { 
	$rootScope.cat = x;
	
	}
	
    //Your cool code
});

})(window, document);

