(function () {
    "use strict";

    angular.module('extension')
        .controller('MainController', MainController);

    MainController.$inject = ['sharedProjects'];

    function MainController(sharedProjects) {
        let ctrl = this;

        let projects = [{
            id: null,
            name: 'Inbox',
            icon: 'inbox.png'
        }, {
            id: null,
            name: 'Today',
            icon: 'today.png'
        }, {
            id: null,
            name: 'Upcoming',
            icon: 'upcoming.png'
        }, {
            id: null,
            name: 'Logbook',
            icon: 'logbook.png'
        }];

        for (let project of sharedProjects) {
            project['icon'] = 'shared.png';
        }

        projects = projects.concat(sharedProjects);

        ctrl.projects = projects;
    }
})();