'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap' , 'angularUtils.directives.dirPagination']);

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
            controller: 'adsMainController'
          })
          .when('/logout', {
              templateUrl: 'templates/homeAds.html',
              controller: 'adsMainController'
          })
          .when('/ads', {
              templateUrl: 'templates/homeAds.html',
              controller: 'adsMainController'
          })
          .when('/unauthorized', {
              template: '<div><p>You couldn\'t be logged in. Please try again.</p></div>'
          })
          .otherwise({
            redirectTo: '/ads'
          });
    }
])
    .constant('baseUrl', 'http://localhost:1337/api')
    .constant('pageSize', 2)

    .run(function($rootScope, $location) {
        $rootScope.$on('$rootChangeError', function(event, current, previous, rejection) {
            $location.path('/unauthorized');
        });
    });
adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');
});