'use strict';

adsApp.controller('HomeCtrl', ['$scope', 'authentication', function($scope, authentication) {
    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();
    //console.log($scope.isLoggedIn);
}]);