'use strict';

adsApp.controller('TownsCtrl', ['$scope', 'townsData', function($scope, townsData) {
    $scope.ready = false;

    townsData.getTowns().$promise
        .then(function (data) {
            $scope.townsData = data;
            $scope.ready = true;
        });
}]);