(function () {
    "use strict";

    angular.module('extension', ['ui.router', 'ngMaterial', 'ngMessages', 'ngCookies'])
        .constant('ApiBasePath', 'https://localhost:8999/api')
        .config(configuration);

    configuration.$inject = ['$mdThemingProvider', '$compileProvider', '$httpProvider'];

    function configuration($mdThemingProvider, $compileProvider, $httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue');

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
    }
})();