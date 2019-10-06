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
            })
            .state('main.item-form', {
                url: '/main/todo-item/{item:json}/{isNew:bool}',
                templateUrl: 'src/todo-item-form/todo-item-form.html',
                controller: 'TodoItemFormController',
                controllerAs: 'ctrl',
                resolve: {
                    todoItem: ['$stateParams', function ($stateParams) {
                        return $stateParams.item;
                    }],
                    isNew: ['$stateParams', function ($stateParams) {
                        return $stateParams.isNew;
                    }],
                    sharedProjects: ['ProjectsService', function (ProjectsService) {
                        return ProjectsService.getSharedProjects();
                    }]
                }
            });
    }
})();