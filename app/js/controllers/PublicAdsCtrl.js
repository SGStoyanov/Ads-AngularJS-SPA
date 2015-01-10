'use strict';

adsApp.controller('PublicAdsCtrl', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    $scope.ready = false;

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};

        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    }

    loadPublicAds();

    $scope.$on('townClicked', function () {
        loadPublicAds(filter.getFilters());
    });

    $scope.$on('categoryClicked', function () {
        loadPublicAds(filter.getFilters());
    });

    $scope.$on('clearCategoryFilter', function () {
        loadPublicAds(filter.getFilters());
    });

    $scope.$on('clearTownFilter', function () {
        loadPublicAds(filter.getFilters());
    });
}]);