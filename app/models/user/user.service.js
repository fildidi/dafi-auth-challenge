(function() {
	'use strict';
	
	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	
	var roles = {
		ADMIN: 'ADMIN',
		USER : 'USER'
	};
	
	angular
		.module('user')
		.constant('ROLES', roles)
		.service('UserService', UserService);
	
	
	/* @ngInject */
	function UserService($exceptionHandler, ROLES, $firebaseAuth, $state) {
		
		var service = {
			setLoginInfo: setLoginInfo,
			signOut     : signOut,
			switchRoles: switchRoles,
			currentUser : undefined
		};
		
		return service;
		
		function setLoginInfo(token) {
			if(!token) {
				throw $exceptionHandler('setLoginInfo is missing providerUser or token');
			}
			
			var user = firebase.auth().currentUser;
			
			service.currentUser = {
				info     : user,
				options  : {},
				functions: {
					signOut: signOut
				}
			};
			
			setUserRole(service.currentUser);
			
			//todo USE WRAPPER
			localStorage.setItem('token', token);
		}
		
		function setUserRole(user) {
			if(!user) {
				throw $exceptionHandler("setUserRole - there is no such user");
			}
			
			switch(user.info.providerData[0].providerId) {
				case 'facebook.com': {
					user.options.fireBaseRole = ROLES.ADMIN;
					user.options.currentRole = ROLES.ADMIN;
					break;
				}
				case 'password': {
					user.options.fireBaseRole = ROLES.USER;
					user.options.currentRole = ROLES.USER;
					break;
				}
			}
		}
		
		function signOut() {
			firebase.auth().signOut().then(function() {
				//remove token from localstorage
				localStorage.removeItem('token');
				//remove current user
				service.currentUser = undefined;
				$state.go('application.home')
			})
		}
		
		function switchRoles() {
			if(service.currentUser.options.fireBaseRole === ROLES.ADMIN){
				console.log("inside switchRoles");
				if(service.currentUser.options.currentRole === ROLES.ADMIN){
					service.currentUser.options.currentRole = ROLES.USER;
				}else {
					service.currentUser.options.currentRole = ROLES.ADMIN;
				}
				
			}
		}
		
	}
	
})();
