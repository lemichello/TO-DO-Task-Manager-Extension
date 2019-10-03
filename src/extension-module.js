(function () {
    "use strict";

    angular.module('extension', ['ui.router', 'ngMaterial', 'ngMessages', 'ngCookies'])
        .constant('ApiBasePath', 'https://localhost:8999/api')
        .config(function ($mdThemingProvider, $compileProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue');

            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
        });
})();