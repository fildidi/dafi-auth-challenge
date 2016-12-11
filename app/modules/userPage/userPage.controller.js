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
	function UserPage(UserService, $state) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.goToState = goToState;
		
		vm.currentUser = UserService.currentUser;
		console.log('currentUser', UserService.currentUser);
		
		function goToState() {
			$state.go('application.sharedPage');
		}
		
	}
	
})();
