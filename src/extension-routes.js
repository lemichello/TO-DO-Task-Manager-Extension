(function () {
    "use strict";

    angular.module('extension')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'src/login/login.html',
                controller: 'LoginController',
                controllerAs: 'ctrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'src/main/main.html',
                controller: 'MainController',
                controllerAs: 'ctrl',
                resolve: {
                    sharedProjects: ['ProjectsService', function (ProjectsService) {
                        return ProjectsService.getSharedProjects();
                    }]
                }
            })
            .state('main.projectItems', {
                url: '/main/project-items/{project:json}',
                templateUrl: 'src/project-items/project-items.html',
                controller: 'ProjectItemsController',
                controllerAs: 'ctrl',
                resolve: {
                    projectItems: ['$stateParams', 'ProjectsService', function ($stateParams, ProjectsService) {
                        return ProjectsService.getItemsForProject($stateParams.project);
                    }]
                }
            });
    }
})();