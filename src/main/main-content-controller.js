(function () {
    "use strict";

    angular.module('extension')
        .controller('MainContentController', MainContentController);

    MainContentController.$inject = ['LoginDataService', '$state'];

    function MainContentController(LoginDataService, $state) {
        let ctrl = this;

        ctrl.projects = [{
            name: 'Inbox',
            icon: 'inbox.png'
        }, {
            name: 'Today',
            icon: 'today.png'
        }, {
            name: 'Upcoming',
            icon: 'upcoming.png'
        }, {
            name: 'Logbook',
            icon: 'logbook.png'
        }];

        ctrl.logOut = function () {
            LoginDataService.logOut();
            $state.go('login');
        };

        ctrl.addTask = function () {
            $state.go('main.item-form', {'item': {header: "", notes: "", date: null, deadline: null, projectId: null}});
        };
    }
})();