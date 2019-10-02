(function () {
    "use strict";

    angular.module('public')
        .service('LoginDataService', LoginDataService);

    LoginDataService.$inject = ['$http', 'ApiBasePath'];

    function LoginDataService($http, ApiBasePath) {
        let service = this;

        service.checkLoginData = function (user) {
            return $http({
                method: 'POST',
                url: `${ApiBasePath}/login`,
                data: JSON.stringify(user),
                withCredentials: true
            }).then(function (response) {
                if (response.data.statusCode === 404) {
                    alert("You entered incorrect login or password");
                } else {
                    alert("Welcome");
                }
                console.log(response)
            }).catch(function (response) {
                alert("You entered incorrect login or password");
                console.log(response)
            });
        }
    }
})();