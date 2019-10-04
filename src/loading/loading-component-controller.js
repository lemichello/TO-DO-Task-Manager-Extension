(function () {
    "use strict";

    angular.module('extension')
        .controller('LoadingController', LoadingController);

    LoadingController.$inject = ['$rootScope'];

    function LoadingController($rootScope) {
        let $ctrl = this;
        let listener;

        $ctrl.$onInit = function () {
            $ctrl.show = false;
            listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        $ctrl.$onDestroy = function () {
            listener();
        };

        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        }
    }
})();