'use strict';

(function(){
	angular.module('HahaX')
	.controller('wikiCategorySearchCtrl',wikiCategorySearchCtrl);

	function wikiCategorySearchCtrl($scope, $http){



		$scope.aaa = "yoyo";
		$scope.userInput = "animal";



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

		$http.jsonp('https://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK',{
  			
    		params: { 
        		action: "query", 
        		indexpageids: "",
        		generator: "allcategories",
        		gacprefix: "animals",
        		continue: "",
        		gaccontinue:"",
        		format:"json"
    		},
    		//headers: { 'Api-User-Agent': 'xingmarc.github.io' },

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