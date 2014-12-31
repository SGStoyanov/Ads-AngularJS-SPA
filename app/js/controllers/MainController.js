'use strict';

adsApp.controller('adsMainController', function($scope, mainData) {
    mainData.getAllAds(function(resp) {
        $scope.data = resp;
        $scope.totalItems = resp.numItems;
        $scope.totalPages = resp.numPages;
    });
    mainData.getAllCategories(function(resp) {
        $scope.categories = resp;
    });
    mainData.getAllTowns(function(resp) {
        $scope.towns = resp;
    });

    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.filters = {};

    $scope.selectedIndex = -1;
    $scope.itemClicked = function($index) {
        $scope.selectedIndex = $index;
    };
});