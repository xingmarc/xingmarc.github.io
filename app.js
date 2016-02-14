'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	$urlRouterProvider.when('','/home/index');
	$stateProvider
	.state('root', {
    	url: '',
    	abstract: true,
    	template: 'view/home.html',
    	controller:'homeCtrl'
	})
	.state('root.home',{
		url:'/home',
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