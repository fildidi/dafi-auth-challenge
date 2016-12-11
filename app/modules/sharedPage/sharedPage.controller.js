(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('sharedPage')
		.controller('SharedPageController', SharedPageController);

	/* @ngInject */
	function SharedPageController(UserService, ROLES) {
		/*jshint validthis: true */
		var vm = this;
		vm.userIsAdmin = null;
		vm.currentUser = UserService.currentUser;
		
		vm.roles = ROLES;
	
	}

})();
