'use strict';

adsApp.controller('LoginCtrl', ['$scope', 'userData', function($scope, userData) {
    $scope.login = function (user) {
        userData.login(user);
    }
}]);