(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('login')
		/* @ngInject */
		.config(function($stateProvider) {

			var Login = {
				name: 'application.login',
				url: '/login',
				views: {
					'application@application': {
						templateUrl: 'modules/login/login.template.html',
						controller: 'LoginController',
						controllerAs: 'login'
					}
				}
			};

			$stateProvider.state(Login);
		});
})();
