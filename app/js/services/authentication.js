'use strict';

adsApp.factory('authentication',  function() {
    var key = 'user';

    function saveUserData (data) {
        //localStorageServiceProvider.set(key, data);
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData() {
        //localStorageServiceProvider.get(key);
        localStorage.getItem(key);
    }

    function getHeaders(argument) {
        var headers = {};
        var userData = getUserData();

        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().user.access_token;
        }

        return headers;
    }

    function removeUser() {
        localStorage.removeItem(key);
    }

    function isAdmin(user) {
        var isAdmin = getUserData().isAdmin;
        return isAdmin;
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser,
        isAdmin: isAdmin
    }
});