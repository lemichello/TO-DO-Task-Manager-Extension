(function () {
    "use strict";

    angular.module('extension', ['ui.router', 'ngMaterial', 'ngMessages', 'ngCookies'])
        .constant('ApiBasePath', 'https://localhost:8999/api')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue');
        });
})();