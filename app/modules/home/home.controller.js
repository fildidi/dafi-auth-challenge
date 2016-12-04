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
	function Home(UserService) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
		}
		
	}

})();
