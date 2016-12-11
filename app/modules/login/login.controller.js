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
	function Login($firebaseAuth, UserService, $stateParams, $state) {
		
		console.log("inside login controller");
		/*jshint validthis: true */
		var vm = this;
		vm.authObj = $firebaseAuth();
		vm.email = undefined;
		vm.password = undefined;
		vm.name = undefined;
		vm.showRegister = $stateParams.showRegister;
		
		vm.signInEmail = signInEmail;
		vm.singInFb = singInFb;
		vm.signUpEmail = signUpEmail;
		
		function signInEmail(form) {
			console.log(form);
			if(!form.$invalid) {
				vm.authObj.$signInWithEmailAndPassword(vm.email, vm.password).then(function(firebaseUser) {
					//create user
					console.log('firebaseUser', firebaseUser);
					console.log("Signed in as:", firebaseUser.uid);
					UserService.setLoginInfo(firebaseUser.refreshToken);
					gotToPage(UserService.currentUser);
				}).catch(function(error) {
					console.error("Authentication failed:", error);
				});
			}
		}
		
		function signUpEmail(form) {
			console.log(form);
			vm.authObj.$createUserWithEmailAndPassword(vm.email, vm.password)
				.then(function(firebaseUser) {
					//create user
					console.log("User " + firebaseUser.uid + " created successfully!");
					console.log('firebaseUser', firebaseUser);
					
					firebase.auth().currentUser.updateProfile({
						displayName: vm.name,
						photoURL   : ""
					}).then(function() {
						// Update successful.
						UserService.setLoginInfo(firebaseUser.refreshToken);
						gotToPage(UserService.currentUser);
					}, function(error) {
						// An error happened.
						console.error("Error: ", error);
					});
					
				}).catch(function(error) {
				console.error("Error: ", error);
			});
		}
		
		function singInFb() {
			console.log("inside facebook");
			vm.authObj.$signInWithPopup("facebook").then(function(facebookUser) {
				//create user
				console.log(facebookUser)
				console.log("Facebook Signed in as:", facebookUser.user.uid);
				UserService.setLoginInfo(facebookUser.credential.accessToken);
				gotToPage(UserService.currentUser);
			}).catch(function(error) {
				console.error("Authentication failed:", error);
			});
		}
		
		function gotToPage(user) {
			switch(user.options.currentRole) {
				case 'USER': {
					$state.go('application.userPage');
					break;
				}
				case 'ADMIN': {
					$state.go('application.adminPage');
					break;
				}
			}
		}
	
		
	}
	
})();
