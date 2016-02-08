'use strict';

angular.module('HahaX',['ui.router'])
.config(function($locationProvider,$stateProvider,$urlRouterProvider,localStorageServiceProvider) {

	$stateProvider
	.state('index',{
	  	url: '',
	 	abstract: true,
	  	views: {
	    	'header': {
	      		templateUrl: 'views/header.html',
	      		controller: 'headerCtrl'
	    	}
	  }
	})
	.state('index.haha', {
	  	url: "/haha",
	  	views: {
	    	'container@': {
	      		templateUrl: "views/haha.html",
	      		controller: 'hahaHomepageCtrl'
	  		}
	  	}
	})

});