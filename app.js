'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("")
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