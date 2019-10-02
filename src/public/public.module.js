(function () {
    "use strict";

    angular.module('public', ['ui.router', 'ngMaterial', 'ngMessages'])
        .constant('ApiBasePath', 'https://localhost:8999/api')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue');
        });
})();