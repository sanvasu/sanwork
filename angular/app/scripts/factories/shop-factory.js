(function (global, doc, undefined) {

  'use strict';

	var ShopFactory = function($rootScope, $q, HttpService) {

		var ShopFactory = {};

		function _request() {

			var _deferred = $q.defer();
			_promise = _deferred.promise;

			$rootScope.$emit('loadStart');
             if($rootScope.cat == 'phones'){
				 alert('going');
				 HttpService.newRequest({
				method: 'GET',
				cache: false,
				reload: true,
				url: 'datas/product-datas.js',
			}).success(function(datas) {
				ShopFactory.tees = datas;
				_deferred.resolve(ShopFactory.tees);
			}).finally(function() {
				$rootScope.$emit('loadComplete');
			});
			//window.location.reload(); 
			 }else
			 {
				 alert('else');
				HttpService.newRequest({
				method: 'GET',
				cache: false,
				reload: true,
				url: 'datas/dresses.js',
			}).success(function(datas) {
				ShopFactory.tees = datas;
				_deferred.resolve(ShopFactory.tees);
			}).finally(function() {
				$rootScope.$emit('loadComplete');
			}); 
			//window.location.reload(); 
			 }
			
$rootScope.cat = "";
			
			return _deferred.promise;
			//window.location.reload(); 

		};

		ShopFactory.getTees = function(url) {
			
			return $q.when( ShopFactory.tees || _promise || _request() ); 
		};

		ShopFactory.getTee = function(id) {
			for(var i = 0, l = ShopFactory.tees.length; i<l; i++){
				if(ShopFactory.tees[i].uid === id){
					return ShopFactory.tees[i];
				}
			}
			return null;
		};

		ShopFactory.getSizes = function() {
			var _filtered = [];
			angular.forEach(ShopFactory.tees, function(tee) {
				angular.forEach(tee.sizes, function(size) {
					if(_filtered.indexOf(size) === -1){
						_filtered.push(size);
					}
				});
			});
			return _filtered;
		};

		ShopFactory.getColors = function() {
			var _filtered = [];
			angular.forEach(ShopFactory.tees, function(tee) {
				angular.forEach(tee.colors, function(color) {
					if(_filtered.indexOf(color) === -1){
						_filtered.push(color);
					}
				});
			});
			return _filtered;
		};

		var _promise = null;

		ShopFactory.tees = null;

		return ShopFactory;

	};

	angular.module('shoppingCart').factory('ShopFactory', ['$rootScope', '$q','HttpService', ShopFactory]);
//window.location.reload();
})(window, document);