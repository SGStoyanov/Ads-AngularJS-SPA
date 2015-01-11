adsApp.factory('userData', ['$resource', 'baseServiceUrl', 'authService',
    function($resource, baseServiceUrl , authService) {

        var currentUser;

        function registerUser(user) {
            currentUser = user.username;
            return $resource(baseServiceUrl + 'user/register')
                .save(user)
                .$promise
                .then(function (data) {
                    authService.saveUser(data);
                });
        }

        function loginUser(user) {
            currentUser = user.username;
            var resource = $resource(baseServiceUrl + 'user/login')
                .save(user);
            resource.$promise
                .then(function (data) {
                    authService.saveUser(data);
                });

            return resource;
        }

        function getCurrentUser() {
            return currentUser;
        }

        function logoutUser(user) {
            currentUser = '';
            return $resource(baseServiceUrl + 'user/logout')
                .save(user)
                .$promise
                .then(function (data) {
                    authService.removeUser(data);
                });
        }

        return {
            register: registerUser,
            login: loginUser,
            logout: logoutUser,
            getCurrentUser: getCurrentUser
        }
}]);