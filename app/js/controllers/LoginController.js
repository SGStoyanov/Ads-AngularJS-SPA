'use strict';

adsApp.controller('LoginController', function ($scope, $location, AuthenticationService) {
    var accessToken = '';

    $scope.login = function(credentials) {
        if(credentials) {
            AuthenticationService.login(credentials)
                .then(
                function (loginSuccessData) {
                    console.dir(loginSuccessData);
                    accessToken = loginSuccessData.access_token;
                    console.log(accessToken);
                },
                function error(loginErrorData) {
                    console.dir(loginErrorData);
                }
            )
        }
    }
});