'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('haha', {
	  	url: "/haha",
	    templateUrl: "views/haha.html",
	    controller: 'hahaHomepageCtrl'
	})
	.state('hex',{
		url:"/hex",
		templateUrl:"views/hex.html",
		controller:'hexCtrl'
	})

});