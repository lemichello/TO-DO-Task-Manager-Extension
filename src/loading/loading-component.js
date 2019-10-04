(function () {
    "use strict";

    angular.module('extension')
        .component('loading', {
            template: "<md-progress-circular ng-if=\"$ctrl.show\" md-mode=\"indeterminate\" layout-align=\"space-around\"></md-progress-circular>",
            controller: 'LoadingController'
        });
})();