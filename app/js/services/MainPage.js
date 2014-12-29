'use strict';

adsApp.factory('mainData', function($http) {
    return {
        getAllAds: function(success) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/ads?PageSize=10&StarPage=1'
            })
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data);
                });
        }
    }
});