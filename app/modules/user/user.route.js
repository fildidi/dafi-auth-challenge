(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('user')
		/* @ngInject */
		.config(function($stateProvider) {

			var User = {
				name: 'application.user',
				url: '/user',
				views: {
					'application@application': {
						templateUrl: 'modules/user/user.template.html',
						controller: 'UserController',
						controllerAs: 'user'
					}
				}
			};

			$stateProvider.state(User);
		});
})();
