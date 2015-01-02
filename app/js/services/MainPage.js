'use strict';

adsApp.factory('mainData', function($http) {
    //var resource = $resource(
    //    'http://localhost:1337/api/user/ads/:id',
    //    {id: '@id'},
    //    { update: {
    //        method: 'PUT'
    //    }}
    //);

    return {
        getAllAds: function(success) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/api/ads'
            })
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data);
                });
        },
        getAllCategories: function(success) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/api/categories'
            })
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data);
                })
        },
        getAllTowns: function(success) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/api/towns'
            })
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data);
                })
        },

        showInfoMessage: function(msg, msgType) {
            noty({
                text: msg,
                type: msgType,
                layout: "topCenter",
                timeout: 3000
            })
        }
    }
});