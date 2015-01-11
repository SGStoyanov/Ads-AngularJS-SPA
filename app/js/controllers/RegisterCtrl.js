'use strict';

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
