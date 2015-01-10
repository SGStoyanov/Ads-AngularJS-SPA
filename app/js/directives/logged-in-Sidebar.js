'use strict';

adsApp.directive('loggedInSidebar', function() {
    return {
        controller: 'LoggedInCtrl',
        restrict: 'E',
        templateUrl: 'templates/private/logged-in-sidebar.html',
        replace: true
    }
});