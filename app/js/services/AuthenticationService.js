'use strict';

adsApp.factory('AuthenticationService', ['$http', '$q',
 function ($http, $q) {

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

     return {
         login: login//,
         //register: register
         //logout: logout
     }
 }]);