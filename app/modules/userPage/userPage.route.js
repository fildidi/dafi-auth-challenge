(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('userPage')
		/* @ngInject */
		.config(function($stateProvider) {

			var UserPage = {
				name: 'application.userPage',
				url: '/user',
				views: {
					'application@application': {
						templateUrl: 'modules/userPage/userPage.template.html',
						controller: 'UserPageController',
						controllerAs: 'userPage'
					}
				},
				authenticate: true
			};

			$stateProvider.state(UserPage);
		});
})();
