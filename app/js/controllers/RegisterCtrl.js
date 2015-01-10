'use strict';

adsApp.controller('RegisterCtrl', ['$scope', '$location','townsData', 'userData', function($scope, $location,townsData, userData) {
    $scope.pageTitle = 'Register';

    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
            //console.log(data);
        });

    $scope.register = function (user) {
        //console.log(user);
        userData.register(user);
    };

    $scope.returnToHome = function() {
        $location.path('/');
    };
}]);