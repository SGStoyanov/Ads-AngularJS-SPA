'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource']);

adsApp.constant('baseServiceUrl', 'http://localhost:1337/api/');

adsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/login', {
            templateUrl: '../templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register', {
            templateUrl: '../templates/register.html',
            controller: 'RegisterCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);