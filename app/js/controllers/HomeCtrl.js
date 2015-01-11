'use strict';

adsApp.controller('HomeCtrl', ['$scope', 'adsData', 'authService', 'notificationService', 'pageSize',
    function($scope, adsData, authService, notificationService, pageSize) {
        $scope.pageTitle = 'Home';
        $scope.isLoggedIn = authService.isLoggedIn();

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.authService = authService;
        $scope.logout = function() {
            authService.logout();
        }
    }
]);