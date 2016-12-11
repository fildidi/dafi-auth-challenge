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
	
	function run($state, $rootScope) {
		
		// $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			
			// console.log(toState);
			// if(toState.name !== 'application.login') {
			// 	console.log("insideeeeeeeeeee");
			// 	if(!localStorage.getItem('tokenn')) {
			// 		console.log("inside else cause there is NO token");
			// 		event.preventDefault();
			// 		$state.go('application.login');
			// 	}
			// }
		// });
	}
})();
