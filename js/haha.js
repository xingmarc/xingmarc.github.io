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
			if ( (question.indexOf("董先生") > -1 || question.indexOf("董建华") > -1) && question.indexOf("支持") > -1){
				$scope.eldersResponse = "你问我滋瓷不滋瓷，我是滋瓷滴~";
			}
			else{
				$scope.eldersResponse = "无可奉告";
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