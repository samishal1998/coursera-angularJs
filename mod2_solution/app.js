(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;
        toBuyCtrl.buyList = ShoppingListCheckOffService.getToBuyList();
        toBuyCtrl.buy = function (index) {
            ShoppingListCheckOffService.buy(index);
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
        var service=this;
        
        var toBuy = [
            new Item("Cookies", 10),
            new Item("Eggs", 12),
            new Item("Beers", 6),
            new Item("Water", "2 Bottles"),
            new Item("Peanuts", "1 Can")
        ];
        var bought = [];

        service.buy = function (index) {
            let boughtItem = toBuy.splice(index, 1)[0];
            bought.push(boughtItem)
        }
        
        service.getToBuyList = function () {
            return toBuy;
        }
        service.getBoughtList = function () {
            return bought
        }
    }

    class Item {
        constructor(name,quantity) {
            this.quantity = quantity;
            this.name = name;
        }
    }

})();