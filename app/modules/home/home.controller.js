(function() {
	'use strict';
	
	/**
	 * @name home
	 * @description
	 *
	 * Index Controller
	 */
	angular
		.module('home')
		.controller('Home', Home);
	
	/* @ngInject */
	function Home($state) {
		/*jshint validthis: true */
		var vm = this;
		vm.goToLogin = goToLogin;
		
		
		function goToLogin(showRegister) {
			$state.go('application.login',{showRegister: showRegister});
		}
		
	}
	
})();
