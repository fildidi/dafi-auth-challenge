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
	function UserService($exceptionHandler, ROLES, $rootScope, $state) {
		
		var service = {
			setLoginInfo: setLoginInfo,
			currentUser : {}
		};
		
		return service;
		
		function setLoginInfo(token) {
			if(!token) {
				throw $exceptionHandler('setLoginInfo is missing providerUser or token');
			}
			var user = firebase.auth().currentUser;
			service.currentUser = {
				info   : user,
				options: {}
			};
			setUserRole(service.currentUser);
			
			//todo USE WRAPPER
			localStorage.setItem('tokenn', token);
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
	}
	
})();
