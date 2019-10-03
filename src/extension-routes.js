(function () {
    "use strict";

    angular.module('extension')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'src/login/login.html',
                controller: 'LoginController',
                controllerAs: 'ctrl'
            })
            .state('main', {
                templateUrl: 'src/main/main.html'
            });
    }
})();