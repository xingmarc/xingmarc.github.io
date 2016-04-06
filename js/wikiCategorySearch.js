'use strict';

(function(){
	angular.module('HahaX')
	.controller('wikiCategorySearchCtrl',wikiCategorySearchCtrl);

	function wikiCategorySearchCtrl($scope, $http){



		$scope.aaa = "yoyo";



		// var test = wikiAPI.get();

		// console.log(test);

		$http({
  			method: 'GET',
  			url: 'https://en.wikipedia.org/w/api.php?action=query&indexpageids=&generator=allcategories&gacprefix=animals&continue='

		}).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available

    		aaa="good";

    		console.log(response);

  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.

    		aaa = "bad";

    		console.log(response);
  		});

	}


})();