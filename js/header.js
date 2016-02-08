'use strict';

(function(){
	angular.module('HahaX')
	.controller('headerCtrl',headerCtrl);

	function headerCtrl($scope, $state){

		$scope.gotoHaha =function(){
			$state.go('index.haha');
		}
	}
})()