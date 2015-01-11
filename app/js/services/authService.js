'use strict';

adsApp.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + 'user/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    localStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + 'user/register',
                    data: userData
                };
                $http(request).success(function(data) {
                    localStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function() {
                delete localStorage['currentUser'];
            },

            getCurrentUser : function() {
                var userObject = localStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(localStorage['currentUser']);
                }
            },

            isAnonymous : function() {
                return localStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                return !!localStorage['currentUser'];
            },

            isNormalUser : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },

            isAdmin : function() {
                // TODO: implement this (similar to isNormalUser())
            },

            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            }
        }
    }
);
