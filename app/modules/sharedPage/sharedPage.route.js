(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('sharedPage')
		/* @ngInject */
		.config(function($stateProvider) {

			var SharedPageRoute = {
				name: 'application.sharedPage',
				url: '/sharedPage',
				views: {
					'application@application': {
						templateUrl: 'modules/sharedPage/sharedPage.template.html',
						controller: 'SharedPageController',
						controllerAs: 'sharedPage'
					}
				},
				authenticate: true
			};

			$stateProvider.state(SharedPageRoute);
		});
})();
