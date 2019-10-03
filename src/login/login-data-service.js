(function () {
    "use strict";

    angular.module('extension')
        .service('LoginDataService', LoginDataService);

    LoginDataService.$inject = ['$http', 'ApiBasePath', '$cookies'];

    function LoginDataService($http, ApiBasePath, $cookies) {
        let service = this;

        service.checkLoginData = function (user) {
            return $http({
                method: 'POST',
                url: `${ApiBasePath}/login`,
                data: JSON.stringify(user),
                mode: 'cors',
                withCredentials: true
            }).then(function (response) {
                if (response.data.statusCode === 404) {
                    alert("You entered incorrect login or password");
                    return false;
                }

                let expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 4);

                $cookies.put('taskManagerUserId', response.data, {'expires': expireDate});
                
                return true;
            }).catch(function () {
                return false;
            });
        };

        service.isCookieExists = function() {
            let cookie = $cookies.get('taskManagerUserId');

            return cookie !== undefined;
        }
    }
})();