(function () {
    "use strict";

    angular.module('extension')
        .factory('loadingHttpInterceptor', loadingHttpInterceptor);

    loadingHttpInterceptor.$inject = ['$rootScope', '$q'];

    function loadingHttpInterceptor($rootScope, $q) {
        let loadingCount = 0;
        let loadingEventName = 'spinner:activate';

        return {
            request: function (config) {
                if (++loadingCount === 1) {
                    $rootScope.$broadcast(loadingEventName, {on: true});
                }

                return config;
            },
            response: function (response) {
                if (--loadingCount === 0) {
                    $rootScope.$broadcast(loadingEventName, {on: false});
                }

                return response;
            },
            responseError: function (response) {
                if (--loadingCount === 0) {
                    $rootScope.$broadcast(loadingEventName, {on: false});
                }

                return $q.reject(response);
            }
        };
    }
})();