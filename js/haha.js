'use strict';

(function(){
	angular.module('Haha')
	.controller('hahaHomepageCtrl',hahaHomepageCtrl);

	function hahaHomepageCtrl($scope){

		$scope.yourQuestion = "";
		$scope.eldersResponse = "";


		var parseAndSay = function(question){
			if (question.indexOf("你好") > -1){
				$scope.eldersResponse = "Excited!";
			}
		}

		$scope.submit = function(){

			if (!$scope.yourQuestion || $scope.yourQuestion == ""){
				return;
			}
			else{
				parseAndSay($scope.yourQuestion);
				return;
			}

		}

	}

})()