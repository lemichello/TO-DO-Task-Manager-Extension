(function () {
    "use strict";

    angular.module('extension', ['public'])
        .config(configuration);

    configuration.$inject = ['$urlRouterProvider'];

    function configuration($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();