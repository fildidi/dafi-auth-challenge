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
		.service('UserService', User);
	
	
	/* @ngInject */
	function User($exceptionHandler, ROLES) {
		var currentUser = null;
		
		var service = {
			setLoginInfo: setLoginInfo,
			currentUser: currentUser
		};
		
		return service;
		
		function setLoginInfo(providerUser, token) {
			if(!providerUser || !token){
				throw $exceptionHandler('setLoginInfo is missing providerUser or token');
			}
			setUser(providerUser);
			
			var token = localStorage.setItem('tokenn', token);
			
		}
		
		function setUser(user) {
			if(!user) {
				throw $exceptionHandler("setUser - there is no such user");
			}
			currentUser = {
				info   : user,
				options: {}
			};
			setUserRole(currentUser);
			console.log("inside service", currentUser);
		}
		
		function setUserRole(currentUser) {
			if(!currentUser) {
				throw $exceptionHandler("setUserRole - there is no such user");
			}
			
			switch(currentUser.info.providerId) {
				case 'facebook.com': {
					currentUser.options.fireBaseRole = ROLES.ADMIN;
					currentUser.options.currentRole = ROLES.ADMIN;
					break;
				}
				case 'password': {
					currentUser.options.fireBaseRole = ROLES.USER;
					currentUser.options.currentRole = ROLES.USER;
					break;
				}
			}
		}
		
		
	}
	
})();
