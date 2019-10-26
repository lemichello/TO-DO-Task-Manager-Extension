(function () {
    "use strict";

    angular.module('extension')
        .service('ProjectsService', ProjectsService);

    ProjectsService.$inject = ['$http', 'ApiBasePath', '$state', 'LoginDataService'];

    function ProjectsService($http, ApiBasePath, $state, LoginDataService) {
        let service = this;

        service.getSharedProjects = function () {
            return $http({
                method: 'POST',
                url: `${ApiBasePath}/projects`,
                data: JSON.stringify({credential: LoginDataService.getLoginHash()})
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

            requestProject.credential = LoginDataService.getLoginHash();

            return $http({
                method: 'POST',
                url: `${ApiBasePath}/projectitems`,
                data: JSON.stringify(requestProject),

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