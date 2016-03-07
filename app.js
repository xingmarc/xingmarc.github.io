'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	//$urlRouterProvider.when('/root','/home/index');
	$stateProvider
	.state('root', {
    	url: '/home',
    	abstract: true,
    	templateUrl: 'index.html',
    	//controller: 'homeCtrl'

    	/*
    	template: "views/root.html",
    	controller: 'rootCtrl'*/
	})
	.state('root.home',{
		url:'',
		templateUrl: 'views/home.html',
    	controller: 'homeCtrl'
	})
	.state('root.haha', {
	  	url: '/haha',
	    templateUrl: 'views/haha.html',
	    controller: 'hahaHomepageCtrl'
	})
	.state('root.hex',{
		url:'/hex',
		templateUrl:'views/hex.html',
		controller:'hexCtrl'
	})

});