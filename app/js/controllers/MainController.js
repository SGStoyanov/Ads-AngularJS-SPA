'use strict';

adsApp.controller('adsMainController', function($scope, mainData) {
    mainData.getAllAds(function(resp) {
        $scope.data = resp;
    });
});