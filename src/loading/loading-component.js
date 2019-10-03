(function () {
    "use strict";

    angular.module('extension')
        .component('loading', {
            template: "<md-progress-circular ng-if=\"$ctrl.show\" md-mode=\"indeterminate\" layout-align=\"space-around\"></md-progress-circular>",
            controller: LoadingController
        });

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