(function() {
	'use strict';

	/**
	 * @name config
	 * @description
	 *
	 * Glboal Configuration Module
	 */
	var core = angular.module('config', [
		'DEBUG_ENV',
		'APPLICATION_SETTINGS',
		'angular-loading-bar',
		'cgBusy'
	]);
	
	var configFirebase = {
		apiKey           : "AIzaSyBwzc8f95rFzKCP9q4pgOVKDsC-NRAvudY",
		authDomain       : "dafi-fe-auth-challenge-fe.firebaseapp.com",
		databaseURL      : "https://dafi-fe-auth-challenge-fe.firebaseio.com",
		storageBucket    : "dafi-fe-auth-challenge-fe.appspot.com",
		messagingSenderId: "965272662694"
	}
	
	firebase.initializeApp(configFirebase);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(DEBUG_ENV,
					   $logProvider,
					   $stateProvider,
					   $urlRouterProvider,
					   $locationProvider,
					   cfpLoadingBarProvider,
					   $httpProvider) {

		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 100;

		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();
