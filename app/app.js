'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

adsApp.config(['$routeProvider',
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
          .when('/ads', {
              templateUrl: 'templates/homeAds.html',
              controller: 'adsMainController'
          })
          .otherwise({
            redirectTo: '/ads'
          });
    }
]);

adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');
});