'use strict';

adsApp.factory('townsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'towns');

    function getAllTowns() {
        //console.log(resource.query());
        return resource.query();
    }

    return {
        getTowns: getAllTowns
    }
}]);