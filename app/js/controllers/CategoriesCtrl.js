'use strict';

adsApp.controller('CategoriesCtrl', ['$scope', 'categoriesData', function($scope, categoriesData) {
    categoriesData.getCategories().$promise
        .then(function (data) {
            $scope.categoriesData = data;
        });
}]);