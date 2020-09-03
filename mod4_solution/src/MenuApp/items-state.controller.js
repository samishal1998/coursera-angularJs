(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('ItemsStateController', ItemsStateController);


	ItemsStateController.$inject = ['data'];
	function ItemsStateController(data) {
		this.itemsList = data.menu_items;
		this.category = data.category;
	}

})();