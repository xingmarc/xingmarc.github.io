'use strict';

(function(){
	angular.module('HahaX')
	.controller('landingCtrl',landingCtrl);

	function landingCtrl($scope, $state){

		$scope.gotoHaha =function(){
			$state.go('index.haha');
		}

		$scope.welcomeWords = ["A", "B", "C", "D"];
	}
})()