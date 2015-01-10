'use strict';

adsApp.controller('CategoriesCtrl', ['$scope', 'categoriesData', function($scope, categoriesData) {
    $scope.ready = false;

    categoriesData.getCategories().$promise
        .then(function (data) {
            $scope.categoriesData = data;
            $scope.ready = true;
        });
}]);