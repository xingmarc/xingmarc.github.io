'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('root', {
    	url: "/home",
    	abstract: true,
    	template: '<ui-view/>'
	})
	.state('root.home',{
		url:'',
		template:"view/home.html",
		controller:'homeCtrl'
	})
	.state('root.haha', {
	  	url: "/haha",
	    templateUrl: "views/haha.html",
	    controller: 'hahaHomepageCtrl'
	})
	.state('root.hex',{
		url:"/hex",
		templateUrl:"views/hex.html",
		controller:'hexCtrl'
	})

});