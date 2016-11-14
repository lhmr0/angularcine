'use strict';

var app = angular.module('EjemploAngularjs', [
	'ui.router'
])


app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		})
		.state('signup',{
			url: '/vender',
			templateUrl: 'views/signup.html',
			controller: 'SignupController',
			controllerAs: 'signup'
		});

	$urlRouterProvider.otherwise('/home');

});