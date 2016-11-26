(function() {
	'use strict';

	/**
	 * @name dafi-auth-challenge
	 * @description
	 *
	 * Root Application Module
	 */
	angular
		.module('dafi-auth-challenge', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'APPLICATION_SETTINGS',
			'ui.router',
			'angular-loading-bar',
			'angulartics',
			'angulartics.google.analytics',
			'nCore',
			'ngAnimate',
			'ngSanitize',
			'ngStorage',
			'config',
			'application',
			'index',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();
