(function () {
	"use strict";

	angular.module('public')
		.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['UserService','MenuService'];
	function SignUpController(UserService,MenuService) {
		let $ctrl = this;
		$ctrl.searchedForItem =false;
		$ctrl.itemNotFound =true;
		$ctrl.itemShortName = undefined;
		$ctrl.user = {}

		$ctrl.signUp = ()=>{
			if ($ctrl.itemNotFound) return;
			UserService.signUp($ctrl.user)
			$ctrl.infoSaved= true;
		};
		$ctrl.itemChanged = ()=> {
			let name = $ctrl.itemShortName.trim().toUpperCase();
			console.log(name)
			MenuService.getMenuItem(name)
				.then(
					(response) => {
						$ctrl.itemNotFound = !response.success
						if(response.success)
							$ctrl.user.favourite_dish = response.item
						else
							delete $ctrl.user.favourite_dish;

					},
					(response) => {
						$ctrl.itemNotFound = true
						delete $ctrl.user.favourite_dish;
					}
				).finally(()=>{
				$ctrl.searchedForItem = true
			})
		}



	}

})();
