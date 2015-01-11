'use strict';

//adsApp.factory('authentication',  function() {
//    var key = 'currentUser';
//
//    function saveUserData (data) {
//        localStorage.setItem(key, angular.toJson(data));
//    }
//
//    function getUserData() {
//        return angular.fromJson(localStorage.getItem(key));
//    }
//
//    function getHeaders(argument) {
//        var headers = {};
//        var userData = getUserData();
//
//        if (userData) {
//            headers.Authorization = 'Bearer ' + getUserData().access_token;
//        }
//
//        return headers;
//    }
//
//    function removeUser() {
//        localStorage.removeItem(key);
//    }
//
//    function isAdmin() {
//        var isAdmin = getUserData().isAdmin;
//        return isAdmin;
//    }
//
//    function isLoggedIn() {
//        return !!getUserData();
//    }
//
//    function getCurrentUser() {
//        var userObject = sessionStorage['currentUser'];
//        if (userObject) {
//            return JSON.parse(sessionStorage['currentUser']);
//        }
//    }
//
//
//    return {
//        saveUser: saveUserData,
//        getUser: getUserData,
//        getHeaders: getHeaders,
//        removeUser: removeUser,
//        isAdmin: isAdmin,
//        isLoggedIn: isLoggedIn,
//        getCurrentUser: getCurrentUser
//    }
//});

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
                    sessionStorage['currentUser'] = JSON.stringify(data);
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
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function() {
                delete sessionStorage['currentUser'];
            },

            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            isAnonymous : function() {
                return sessionStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                return !!sessionStorage['currentUser'];
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
