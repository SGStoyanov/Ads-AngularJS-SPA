'use strict';

//adsApp.controller('LoginCtrl', ['$scope', '$location', 'userData', 'notificationService',
//    function($scope, $location, userData, notificationService) {
//        $scope.pageTitle = 'Login';
//
//        $scope.login = function (user) {
//            userData.login(user)
//                .$promise
//                .then(function (data) {
//                    $location.path('/');
//                    notificationService.showSuccess('Login successful, redirecting to Home');
//                }, function (error) {
//                    notificationService.showError('Wrong credentials, please try again', error);
//                    //console.log('Wrong credentials, try again please');
//                });
//        };
//
//        $scope.returnToHome = function() {
//            $location.path('/');
//        };
//    }
//]);

adsApp.controller('LoginCtrl',
    function ($scope, $rootScope, $location, authService, notificationService) {
        $scope.pageTitle = 'Login';
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notificationService.showSuccess("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    notificationService.showError(('Wrong credentials, please try again.'))
                }
            );
        };
    }
);
