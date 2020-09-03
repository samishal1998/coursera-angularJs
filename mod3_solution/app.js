(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive(`foundItems`,FoundItems)


    function FoundItems() {
        var ddo = {
            templateUrl: './templates/foundItems.html',
            scope: {
                items : '<',
                onRemove: '&'
            }
        }
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var ctrl = this;

        ctrl.found = undefined;
        ctrl.searchTerm='';

        ctrl.filter = function(){

            console.log(ctrl.searchTerm)

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.toLowerCase().trim()).then( (result) => {
                ctrl.found = result;
                console.log(ctrl.found)
            })
            
        }

        ctrl.remove = (index)=>{
            ctrl.found.splice(index,1)
        }

    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {

        var service=this;

        service.getMatchedMenuItems = (searchTerm)=>{

            return $http({ url:"https://davids-restaurant.herokuapp.com/menu_items.json"})
            .then( 
                (result)=> {
                    var foundItems=result.data.menu_items
                    if(searchTerm.length == 0) return [];
                    return foundItems.filter((item)=>{ return item.description.includes(searchTerm) } )
                }
            );
            
        }

    }



})();