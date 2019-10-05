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
            }).catch(function (response) {
                alert('Something went wrong on the server');
                response.reject();
            });
        };

        service.getItemsForProject = function (project) {
            let requestProject = {
                id: project.id,
                name: project.name
            };

            return $http({
                method: 'POST',
                url: `${ApiBasePath}/projectitems`,
                data: JSON.stringify(requestProject),
                mode: 'cors',
                withCredentials: true
            }).then(function (response) {
                if (response.data.statusCode === 401) {
                    $state.go('login');
                }

                return {
                    project: project,
                    items: response.data
                };
            }).catch(function (response) {
                alert('Something went wrong on the server');
                response.reject();
            });
        };
    }
})();