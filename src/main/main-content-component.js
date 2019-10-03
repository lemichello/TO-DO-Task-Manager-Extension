(function () {
    "use strict";

    angular.module('extension')
        .component('mainContent', {
            templateUrl: 'src/main/main-content.html',
            controller: 'MainContentController',
            bindings: {
                projects: '<'
            }
        });
})();