'use strict';

adsApp.controller('adsMainController', function($scope, mainData) {
    mainData.getAllAds(function(resp) {
        $scope.data = resp;
    });
    mainData.getAllCategories(function(resp) {
        $scope.categories = resp;
    });
    mainData.getAllTowns(function(resp) {
        $scope.towns = resp;
    });
});