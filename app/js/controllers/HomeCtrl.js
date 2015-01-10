'use strict';

adsApp.controller('HomeCtrl', ['$scope', 'adsData', 'authentication', 'notificationService', 'pageSize',
    function($scope, adsData, authentication, notificationService, pageSize) {
        $scope.pageTitle = 'Home';
        $scope.isLoggedIn = authentication.isLoggedIn();

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
    }
]);