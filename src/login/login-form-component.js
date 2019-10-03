(function () {
    "use strict";

    angular.module('extension')
        .component('loginForm', {
            templateUrl: 'src/login/login-form.html',
            controller: 'LoginFormController'
        });
})();