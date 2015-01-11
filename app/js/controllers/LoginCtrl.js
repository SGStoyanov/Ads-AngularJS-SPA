'use strict';

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
