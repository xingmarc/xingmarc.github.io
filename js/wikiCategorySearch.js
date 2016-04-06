'use strict';

(function(){
	angular.module('HahaX')
	.controller('wikiCategorySearchCtrl',wikiCategorySearchCtrl);

	function wikiCategorySearchCtrl($scope, wikiAPI){



		$scope.aaa = "yoyo";

		var test = wikiAPI.get();

		console.log(test);


	}


})();