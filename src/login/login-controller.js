(function () {
    "use strict";

    angular.module('extension')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginDataService', '$state'];

    function LoginController(LoginDataService, $state) {
        let ctrl = this;

        ctrl.$onInit = function () {
            if (LoginDataService.isCookieExists()) {
                $state.go('main');
            }
        };
    }
})();