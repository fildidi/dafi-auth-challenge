(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('navbarDafi')
		.component('navbarDafi', {
			bindings: {
			},
			templateUrl: 'common/navbarDafi/navbarDafi.template.html',
			controller: NavbarDafiComponent
		});

	/* @ngInject */
	function NavbarDafiComponent(UserService, ROLES) {
		/*jshint validthis: true */
		var vm = this;
		vm.showBackBtn = false;
		
		vm.logOut =logOut;
		vm.logInAsUser = logInAsUser;
		console.log("inside NavbarDafiComponent");
		
		vm.userService = UserService;
		
		vm.roles = ROLES;
		console.log('navbardafi',vm.userService);
		
		function logOut() {
			UserService.signOut();
		}
		function logInAsUser() {
			UserService.switchRoles();
		}
	};

})();
