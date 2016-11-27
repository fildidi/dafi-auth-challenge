(function() {
	'use strict';
	
	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('login')
		.controller('LoginController', Login);
	
	/* @ngInject */
	function Login($firebaseAuth) {
		/*jshint validthis: true */
		var vm = this;
		vm.authObj = $firebaseAuth();
		vm.email = undefined;
		vm.password = undefined;
		
		vm.signInEmail = signInEmail;
		vm.singInFb = singInFb;
		vm.signUpEmail = signUpEmail;
		
		function signInEmail(form) {
			console.log(form);
			if(!form.$invalid){
				vm.authObj.$signInWithEmailAndPassword(vm.email, vm.password).then(function(firebaseUser) {
					console.log('firebaseUser',firebaseUser);
					console.log("Signed in as:", firebaseUser.uid);
				}).catch(function(error) {
					console.error("Authentication failed:", error);
				});
			}
		}
		
		function signUpEmail(form) {
			console.log(form);
			vm.authObj.$createUserWithEmailAndPassword(vm.email, vm.password)
				.then(function(firebaseUser) {
					console.log("User " + firebaseUser.uid + " created successfully!");
				}).catch(function(error) {
				console.error("Error: ", error);
			});
		}
		
		function singInFb() {
			console.log("inside facebook");
			vm.authObj.$signInWithPopup("facebook").then(function(result) {
				console.log("Facebook Signed in as:", result.user.uid);
			}).catch(function(error) {
				console.error("Authentication failed:", error);
			});
		}
	}
	
})();
