(function () {
    "use strict";

    angular.module('public')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.login', {
                url: '/',
                templateUrl: 'src/public/login/login.html'
                // TODO: add resolve.
            });
    }
})();