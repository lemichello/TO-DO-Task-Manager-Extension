(function () {
    "use strict";

    angular.module('extension', ['ui.router', 'ngMaterial', 'ngMessages', 'ngCookies'])
        .constant('ApiBasePath', 'https://todo-tasks-manager-api.herokuapp.com/api')
        .config(configuration);

    configuration.$inject = ['$mdThemingProvider', '$compileProvider', '$httpProvider'];

    function configuration($mdThemingProvider, $compileProvider, $httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue');

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);

        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 4);
    }
})();