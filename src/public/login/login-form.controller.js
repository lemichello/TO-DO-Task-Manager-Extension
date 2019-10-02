(function () {
    "use strict";

    angular.module('public')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['LoginDataService'];

    function LoginFormController(LoginDataService) {
        let ctrl = this;

        ctrl.user = {
            login: "",
            password: ""
        };

        ctrl.login = function () {
            LoginDataService.checkLoginData(ctrl.user).then(function () {

            }).catch(function () {

            });
        }
    }
})();