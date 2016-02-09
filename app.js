'use strict';

angular.module('HahaX',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	$stateProvider
	// .state('index',{
	//   	url: '',
	//  	abstract: true,
	//   	views: {
	//     	'header': {
	//       		templateUrl: 'views/header.html',
	//       		controller: 'headerCtrl'
	//     	}
	//   }
	// })

	// .state('index',{
	//   	url: '',
	//   	views: {
	//     	'container@': {
	//       		templateUrl: 'index.html',
	//       		controller: 'landingCtrl'
	//     	}
	//   }
	// })
	// .state('index.landing', {
 //      	url: "/",
 //      	views: {
 //        	'container@': {
 //          		templateUrl: "views/landing.html",
 //          		controller: 'landingCtrl',
 //        	}
 //      	}
 //    })
	.state('haha', {
	  	url: "/haha",
	  	views: {
	    	'container@': {
	      		templateUrl: "views/haha.html",
	      		controller: 'hahaHomepageCtrl'
	  		}
	  	}
	})

});