'use strict';

adsApp.controller('LoginCtrl', ['$scope', '$location', 'userData', function($scope, $location, userData) {
    $scope.pageTitle = 'Login';

    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function (data) {
                $location.path('/');
                console.log('Login success, redirecting to Home');
            }, function (error) {
                console.log('Wrong credentials, try again please');
            });
    };

    $scope.returnToHome = function() {
        $location.path('/');
    };
}]);