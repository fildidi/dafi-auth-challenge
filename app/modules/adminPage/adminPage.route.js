(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('adminPage')
		/* @ngInject */
		.config(function($stateProvider) {

			var AdminPageRoute = {
				name: 'application.adminPage',
				url: '/admin',
				views: {
					'application@application': {
						templateUrl: 'modules/adminPage/adminPage.template.html',
						controller: 'AdminPageController',
						controllerAs: 'adminPage'
					}
				},
				authenticate: true
			};

			$stateProvider.state(AdminPageRoute);
		});
})();
