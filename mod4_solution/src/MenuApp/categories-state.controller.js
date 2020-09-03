(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('CategoriesStateController', CategoriesStateController);


	CategoriesStateController.$inject = ['MenuDataService','categoriesList'];
	function CategoriesStateController(MenuDataService,categoriesList) {
		 this.categoriesList = categoriesList;
	}

})();