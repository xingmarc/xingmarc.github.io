'use strict';

(function(){
	angular.module('HahaX')
	.controller('wikiCategorySearchCtrl',wikiCategorySearchCtrl);

	function wikiCategorySearchCtrl($scope, $http){



		$scope.aaa = "yoyo";



		// var test = wikiAPI.get();

		// console.log(test);

		$http({
  			method: 'POST',
  			url: 'https://en.wikipedia.org/w/api.php',
  			action: 'query',
  			titles:'abcd',


  			header:{
  				'Api-User-Agent': 'Example/1.0',
  			}

		}).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available

    		$scope.aaa="good";

    		console.log(response);

  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.

    		$scope.aaa = "bad";

    		console.log(response);
  		});

	}


})();