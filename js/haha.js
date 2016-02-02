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
				return;
			}
			if ( (question.indexOf("董先生") > -1 || question.indexOf("董建华") > -1) && question.indexOf("支持") > -1){
				$scope.eldersResponse = "你问我滋瓷不滋瓷，我是滋瓷滴~";
				return;
			}
			if (question.indexOf("华莱士") > -1){
				$scope.eldersResponse = "美国的华莱士比你们不知道高到哪里去了，我和他谈笑风生";
				return;
			}
			if (question.indexOf("为什么") > -1){
				$scope.eldersResponse = "任何事情都要按照基本法";
				return;
			}
			if (question.indexOf("宋祖英") > -1 || question.indexOf("国母") > -1){
				$scope.eldersResponse = "I'm Angry!";
				return;
			}
			else{
				$scope.eldersResponse = "无可奉告";
				return;
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