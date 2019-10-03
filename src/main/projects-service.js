(function () {
    "use strict";

    angular.module('extension')
        .service('ProjectsService', ProjectsService);

    ProjectsService.$inject = ['$http', 'ApiBasePath', '$state'];

    function ProjectsService($http, ApiBasePath, $state) {
        let service = this;

        service.getSharedProjects = function () {
            return $http({
                method: 'GET',
                url: `${ApiBasePath}/projects`,
                mode: 'cors',
                withCredentials: true
            }).then(function (response) {
                if (response.data.statusCode === 401) {
                    $state.go('login');
                }

                return response.data;
            });
        }
    }
})();