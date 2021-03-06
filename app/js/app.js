'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

adsApp.constant('baseServiceUrl', 'http://localhost:1337/api/');
adsApp.constant('pageSize', 2);

adsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../templates/public/home.html',
            controller: 'HomeCtrl'
        })
        .when('/login', {
            templateUrl: '../templates/public/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register', {
            templateUrl: '../templates/public/register.html',
            controller: 'RegisterCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);