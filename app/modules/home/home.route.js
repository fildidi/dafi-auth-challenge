(function() {
	'use strict';

	/**
	 * @name home
	 * @description
	 *
	 * Home state configuration
	 */
	angular.module('home')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.home',
				url: '/',
				views: {
					'application@application': {
						templateUrl: 'modules/home/home.template.html',
						controller: 'Home',
						controllerAs: 'home'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
