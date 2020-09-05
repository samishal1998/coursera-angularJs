(function () {
	"use strict";

	angular.module('public')
		.controller('UserInfoController', UserInfoController);

	UserInfoController.$inject = ['user'];
	function UserInfoController(user) {
		let $ctrl = this;
		$ctrl.user = user;
	}

})();
