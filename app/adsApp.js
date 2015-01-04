'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap' , 'angularUtils.directives.dirPagination']);

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
])

    .run(function($rootScope, $location) {
        $rootScope.$on('$rootChangeError', function(event, current, previous, rejection) {
            $location.path('/unauthorized');
        });
    });

adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

