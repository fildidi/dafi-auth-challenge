(function() {
	'use strict';
	
	/**
	 * @name dafi-auth-challenge
	 * @description
	 *
	 * Run phase of the Application.
	 */
	angular
		.module('dafi-auth-challenge')
		.run(run);
	
	function run($state, $rootScope, UserService) {
		
		$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
			console.log('toState.authenticate',toState.authenticate);
			if (toState.authenticate){
				// User isn’t authenticated
				if(!UserService.currentUser){
					$state.go('application.login');
					event.preventDefault();
				}
			}
		});
	}
})();
