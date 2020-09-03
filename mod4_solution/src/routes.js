(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories-state.template.html',
                controller: 'CategoriesStateController as ctrl',
                resolve: {
                    categoriesList: [
                        'MenuDataService',
                        function (MenuDataService) {
                            let data = MenuDataService.getAllCategories();
                            return data;
                        }
                    ]
                }
            })

            .state('category', {
                url: '/category/{categoryShortName}',
                templateUrl: 'src/templates/items-state.template.html',
                controller: 'ItemsStateController as ctrl',
                resolve: {
                    data: [
                        '$stateParams',
                        'MenuDataService',
                        function ($stateParams,MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                        }
                    ]
                }
            });

    }

})();