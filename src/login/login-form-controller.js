(function () {
    "use strict";

    angular.module('extension')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['LoginDataService', '$state'];

    function LoginFormController(LoginDataService, $state) {
        let ctrl = this;

        ctrl.user = {
            login: "",
            password: ""
        };

        ctrl.login = function () {
            LoginDataService.checkLoginData(ctrl.user).then(function (result) {
                if (result === false) {
                    alert('You entered incorrect login or password. Try again.');
                    return;
                }

                $state.go('main');
            });
        }
    }
})();