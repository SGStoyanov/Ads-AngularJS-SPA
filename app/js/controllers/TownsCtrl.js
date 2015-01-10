'use strict';

adsApp.controller('TownsCtrl', ['$scope', '$rootScope', 'townsData', 'filter', function($scope, $rootScope, townsData, filter) {

    townsData.getTowns().$promise
        .then(function (data) {
            $scope.townsData = data;
        });

    $scope.townClicked = function townClicked(town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
    }
}]);