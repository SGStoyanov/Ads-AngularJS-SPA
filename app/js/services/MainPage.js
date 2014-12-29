'use strict';

adsApp.factory('mainData', function($http) {
    return {
        getAllAds: function(success) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/api/ads?PageSize=8&StartPage=1'
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
                url: 'http://softuni-ads.azurewebsites.net/api/categories'
            })
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data);
                })
        }
    }
});