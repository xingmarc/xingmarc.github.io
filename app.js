'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	//$urlRouterProvider.when('/root','/home/index');
	$stateProvider
	.state('root', {
    	url: '',
    	views:{
    		'header': {
    			templateUrl: 'views/header.html'
    		}
    	}
    	/*
    	template: "views/root.html",
    	controller: 'rootCtrl'*/
	})
	.state('root.home',{
		url:'/home',
		views: {
			'container@':{
				templateUrl: 'views/home.html',
    			controller: 'homeCtrl'
			}
		}
		
	})
	.state('root.haha', {
	  	url: '/haha',
	  	views: {
	  		'container@':{
	  			templateUrl: 'views/haha.html',
	    		controller: 'hahaHomepageCtrl'
	  		}
	  	}
	    
	})
	.state('root.hex',{
		url:'/hex',
		views: {
			'container@': {
				templateUrl:'views/hex.html',
				controller:'hexCtrl'
			}
		}
		
	})

});