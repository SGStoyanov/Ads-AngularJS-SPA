'use strict';

adsApp.controller('LoginController', function ($scope, $location, AuthenticationService) {
    $scope.credentials = {Username: '', Password: ''};
    var accessToken = '';

    if(AuthenticationService.isLoggedIn()) {
        $location.path('/home');
    }

    $scope.login = function(credentials) {
        $scope.$broadcast('show-errors-event');

        if($scope.loginForm.$invalid) {
            return;
        }

        if(credentials) {
            AuthenticationService.login(credentials)
                .then(
                function (loginSuccessData) {
                    //console.dir(loginSuccessData);
                    accessToken = loginSuccessData.access_token;
                    AuthenticationService.redirectToHome();
                    //console.log(accessToken);
                    $scope.$broadcast('show-login-success');
                },
                function error(loginErrorData) {
                    console.dir(loginErrorData);
                    $scope.ErrorMessage = 'Login failed. Incorrect Username or Password.';
                }
            )
        }
    }
});