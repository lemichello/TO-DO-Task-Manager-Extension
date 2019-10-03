(function () {
    "use strict";

    angular.module('extension')
        .controller('MainContentController', MainContentController);

    function MainContentController() {
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
    }
})();