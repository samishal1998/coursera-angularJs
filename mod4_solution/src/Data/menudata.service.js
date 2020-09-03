(function () {
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http']

	function MenuDataService($http) {
		let service = this;

		service.getAllCategories = () => {
			return $http(
				{
					url: "https://davids-restaurant.herokuapp.com/categories.json"
				}
			).then(
				(response) => {
					return response.data
				}
			)

		}

		service.getItemsForCategory = (categoryShortName) => {
			return $http(
				{
					url: "https://davids-restaurant.herokuapp.com/menu_items.json",
					params: {
						category: categoryShortName
					},
				}
			).then(
				(response) => {
					return response.data
				}
			)


		}
	}

})();
