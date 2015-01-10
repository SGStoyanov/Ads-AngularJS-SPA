'use strict';

adsApp.controller('CategoriesCtrl', ['$scope', '$rootScope','categoriesData', 'filter', function($scope, $rootScope,categoriesData, filter) {
    $scope.ready = false;

    categoriesData.getCategories().$promise
        .then(function (data) {
            $scope.categoriesData = data;
            $scope.ready = true;
        });

    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    }
}]);