(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('userPage')
		.controller('UserPageController', UserPage);

	/* @ngInject */
	function UserPage(UserService) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.currentUser = UserService.currentUser;
		console.log('currentUser',UserService.currentUser);
	}

})();
