(function () {
    "use strict";

    angular.module('extension')
        .controller('ProjectItemsController', ProjectItemsController);

    ProjectItemsController.$inject = ['projectItems'];

    function ProjectItemsController(projectItems) {
        let ctrl = this;

        ctrl.project = projectItems.project;
        ctrl.items = projectItems.items;

        ctrl.removeItem = function (item) {
            let itemIndex = ctrl.items.findIndex(i => i.id === item.id);

            ctrl.items.splice(itemIndex, 1);
        };
    }
})();