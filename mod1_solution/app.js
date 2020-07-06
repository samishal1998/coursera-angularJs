(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.msgColor = "#000000";
        $scope.lunchInput = "";

        $scope.checkLunch = function () {

            let itemCount;

            if ($scope.lunchInput === "") {
                itemCount = 0;
            } else {
                let items = $scope.lunchInput.split(',').filter(function (item) {
                    return !(item.trim() === "");
                });
                itemCount = items.length;
            }

            if (itemCount == 0) {

                $scope.msgColor = "#FF0000";
                $scope.message = "Please enter data first";

            } else if (itemCount <= 3) {
                
                $scope.msgColor = "#00FF00";
                $scope.message = "Enjoy!";

            } else {
                
                $scope.msgColor = "#00FF00";
                $scope.message = "Too Much!";

            }
        };


    }

})();