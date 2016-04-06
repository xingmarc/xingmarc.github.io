'use strict';

(function(){
	angular.module('HahaX')
	.controller('wikiCategorySearchCtrl',wikiCategorySearchCtrl);

	function wikiCategorySearchCtrl($scope, $http){



		$scope.aaa = "yoyo";
		$scope.userInput = "animal";


		// var test = wikiAPI.get();

		// console.log(test);
/*
$.ajax( {
    url: "https://en.wikipedia.org/w/api.php",
    dataType:'jsonp',
    data: { 
        action: "query", 
        indexpageids:"",
        generator:"allcategories",
        gacprefix:"animals",
        continue :"", 
        format: "json"
    },
    success: function(response) {console.log(response)}
})
*/
		$http.get({
  			
  			url: 'https://en.wikipedia.org/w/api.php',

  			dataType:'jsonp',
    		data: { 
        		action: "query", 
        		indexpageids: "",
        		generator: "allcategories",
        		gacprefix: $scope.userInput,
        		continue: "",
         		format: "json" 
    		},

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