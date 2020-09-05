(function () {
	"use strict";

	angular.module('common')
		.service('UserService', UserService);

	function UserService() {
		let service = this;
		let user = null;

		service.signUp = function (_user) {
			user=_user;
		};
		service.getUser = () => (user);

		service.signOut = ()=>{
			user = null;
		}

	}


})();
