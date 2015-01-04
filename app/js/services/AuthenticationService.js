'use strict';

adsApp.factory('AuthenticationService', ['$http', '$q', '$location','$cookies',
 function ($http, $q, $location, $cookies) {

     var hostUrl = 'http://localhost:1337/api';

     function login(credentials) {
         var l = $q.defer();
         $http.post(hostUrl + '/user/login', credentials)
             .success(function (loginData) {
                 l.resolve(loginData);
             })
             .error(function (loginError) {
                 l.reject(loginError);
             });

         return l.promise;
     }

     function isLoggedIn() {
         return !!$cookies.FPSSO; //convert value to bool
     }

     //function saveAttemptUrl() {
     //    if($location.path().toLowerCase() != '/login' || $location.path().toLowerCase() != '/register') {
     //        redirectToUrlAfterLogin.url = $location.path();
     //    } else {
     //        redirectToUrlAfterLogin.url = '/home';
     //    }
     //}

     function redirectToHome() {
        $location.path('/home');
     }

     return {
         login: login,
         isLoggedIn: isLoggedIn,
         //saveAttemptedUrl: saveAttemptUrl,
         redirectToHome: redirectToHome
         //register: register
         //logout: logout
     }
 }]);