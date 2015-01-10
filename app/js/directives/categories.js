'use strict';

adsApp.directive('categories', function() {
    return {
        controller: 'CategoriesCtrl',
        restrict: 'E',
        templateUrl: 'templates/public/categories.html',
        replace: true
    }
});