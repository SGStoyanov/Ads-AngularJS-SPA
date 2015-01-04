'use strict';

adsApp.controller('LoginController', function ($scope, $location, AuthenticationService) {
    $scope.credentials = {Username: '', Password: ''};
    var accessToken = '';

    if(AuthenticationService.isLoggedIn()) {
        $location.path('/home');
    }

    $scope.login = function(credentials) {
        if(credentials) {
            AuthenticationService.login(credentials)
                .then(
                function (loginSuccessData) {
                    //console.dir(loginSuccessData);
                    accessToken = loginSuccessData.access_token;
                    AuthenticationService.redirectToHome();
                    //console.log(accessToken);
                },
                function error(loginErrorData) {
                    console.dir(loginErrorData);
                    $scope.ErrorMessage = 'Login failed. Incorrect Username or Password.';
                }
            )
        }
    }
});