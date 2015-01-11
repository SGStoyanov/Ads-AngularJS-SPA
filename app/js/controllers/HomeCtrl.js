'use strict';

adsApp.controller('HomeCtrl', ['$scope', 'adsData', 'authService', 'notificationService', 'pageSize',
    function($scope, adsData, authService, notificationService, pageSize) {
        $scope.pageTitle = 'Home';
        $scope.isLoggedIn = authService.isLoggedIn();
        //console.log(authService.isLoggedIn());

        //console.log(userData.getCurrentUser());
        //if (userData.getCurrentUser()) {
        //    $scope.currentUser = userData.getCurrentUser();
        //}

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadAds = function() {
            adsData.getPublicAds(
                $scope.adsParams,
                function success(data) {

                },
                function error(err) {

                }
            );
        };

        $scope.reloadAds();

        $scope.authService = authService;
        $scope.logout = function() {
            authService.logout();
        }
    }
]);