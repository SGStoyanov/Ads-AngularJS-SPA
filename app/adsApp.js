'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap' , 'angularUtils.directives.dirPagination']);

//where we will store the attempted url
//adsApp.value('redirectToUrlAfterLogin', { url: '/' });

adsApp
    .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
          .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'adsMainController'
          })
          .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
          })
          .when('/logout', {
              templateUrl: 'templates/home.html',
              controller: 'adsMainController'
          })
          .when('/home', {
              templateUrl: 'templates/home.html',
              controller: 'adsMainController'
          })
          .when('/authorized', {
              templateUrl: 'templates/home.html'
          })
          .when('/unauthorized', {
              template: '<div><p>You couldn\'t be logged in. Please try again.</p></div>'
          })
          .otherwise({
            redirectTo: '/home'
          });
    }
]);

    //.run(function($rootScope, $location) {
    //    $rootScope.$on('$rootChangeError', function(event, current, previous, rejection) {
    //        $location.path('/unauthorized');
    //    });
    //});

    //.run(function ($location, AuthenticationService) {
    //    if (!AuthenticationService.isLoggedIn()) {
    //        //AuthenticationService.saveAttemptedUrl();
    //        $location.path('/login');
    //    } else {
    //        $location.path('/home');
    //    }
    //});

adsApp.config(function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
})
    .provider('securityInterceptor', function() {
        this.$get = function($location, $q, $injector, $cookies) {
            return function(promise) {
                var appAuth = $injector.get('AuthenticationService');
                return promise.then(null, function(response) {
                    if (response.status === 401) {
                        delete $cookies.FPSSO;
                        //appAuth.saveAttemptedUrl();
                        $location.path('/login');
                    }
                    return $q.reject(response);
                });
            }
        };
    });

adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

