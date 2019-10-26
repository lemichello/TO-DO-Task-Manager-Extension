(function () {
    "use strict";

    angular.module('extension')
        .service('LoginDataService', LoginDataService);

    LoginDataService.$inject = ['$http', 'ApiBasePath', '$cookies'];

    function LoginDataService($http, ApiBasePath, $cookies) {
        let service = this;

        let loginHash = '';

        service.checkLoginData = function (user) {
            return $http({
                method: 'POST',
                url: `${ApiBasePath}/login`,
                data: JSON.stringify(user)
            }).then(function (response) {
                if (response.data.statusCode === 404) {
                    alert("You entered incorrect login or password");
                    return false;
                }

                loginHash = response.data;
                return true;
            }).catch(function () {
                return false;
            });
        };

        service.logOut = function () {
            loginHash = '';
        };

        service.getLoginHash = function () {
            return loginHash;
        };
    }
})();