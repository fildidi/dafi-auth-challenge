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
	
	function run($state, $rootScope, UserService, $firebaseAuth) {
		var authObj = $firebaseAuth();
		$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
			console.log('toState.authenticate', toState.authenticate);
			if(toState.authenticate || localStorage.getItem('token')) {
				if(localStorage.getItem('token')) {
					var expiredTime = localStorage.getItem('exp_time');
					if(expiredTime < new Date()) {
						UserService.signOut();
					}
				}
				if(!UserService.currentUser) {
					// UserService.loadUserFromFirebase();
					event.preventDefault();
					authObj.$onAuthStateChanged(function(firebaseUser) {
						if(firebaseUser) {
							UserService.setLoginInfo();
							console.log("Signed in as:", firebaseUser.uid);
						} else {
							$state.go('application.login')
						}
					});
				}
			}
		});
		
		var previousState = null;
		$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
			if(to === previousState) {
				if(UserService.currentUser && UserService.currentUser.options.fireBaseRole !== UserService.currentUser.options.currentRole) {
					UserService.signOut();
				}
			} else {
				previousState = from;
			}
			
		});
	}
})();
