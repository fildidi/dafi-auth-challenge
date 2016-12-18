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
			
			var user = firebase.auth().currentUser;
			
			console.log(user)
			service.currentUser = {
				info     : user,
				options  : {},
				functions: {
					signOut: signOut
				}
			};
			
			setUserRole(service.currentUser);
			if(token) {
			// 	//todo USE WRAPPER
				localStorage.setItem('token', token);
			}
		}
		
		function setUserRole(user) {
			if(!user) {
				throw $exceptionHandler("setUserRole - there is no such user");
			}
			
			switch(user.info.providerData[0].providerId) {
				case 'facebook.com': {
					user.options.fireBaseRole = ROLES.ADMIN;
					user.options.currentRole = ROLES.ADMIN;
					$state.go('application.adminPage');
					break;
				}
				case 'password': {
					user.options.fireBaseRole = ROLES.USER;
					user.options.currentRole = ROLES.USER;
					$state.go('application.userPage');
					break;
				}
			}
		}
		
		function signOut() {
			
			if(service.currentUser.options.currentRole !== service.currentUser.options.fireBaseRole){
				console.log("inside if");
				service.switchRoles();
				$state.go('application.adminPage');
			}else{
				
				firebase.auth().signOut().then(function() {
					service.currentUser = undefined;
					$state.go('application.home');
				})
			}
		}
		
		function switchRoles() {
			if(service.currentUser.options.fireBaseRole === ROLES.ADMIN){
				if(service.currentUser.options.currentRole === ROLES.ADMIN){
					service.currentUser.options.currentRole = ROLES.USER;
					$state.go('application.userPage')
				}else {
					service.currentUser.options.currentRole = ROLES.ADMIN;
					$state.go('application.adminPage')
				}
			}
		}
	}
	
})();
