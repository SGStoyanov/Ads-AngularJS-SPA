'use strict';

//adsApp.controller('RegisterCtrl', ['$scope', '$location','townsData', 'userData', function($scope, $location,townsData, userData) {
//    $scope.pageTitle = 'Register';
//
//    townsData.getTowns()
//        .$promise
//        .then(function (data) {
//            $scope.towns = data;
//            //console.log(data);
//        });
//
//    $scope.register = function (user) {
//        //console.log(user);
//        userData.register(user);
//    };
//
//    $scope.returnToHome = function() {
//        $location.path('/');
//    };
//}]);

adsApp.controller('RegisterCtrl',
    function ($scope, $rootScope, $location, authService, notificationService) {
        $scope.pageTitle = 'Register';
        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notificationService.showSuccess("Registration successful");
                    $location.path("/");
                },
                function error(err) {
                    notificationService.showError("Registration unsuccessful, try again");
                }
            );
        };
    }
);
