(function () {
    "use strict";

    angular.module('extension')
        .controller('ProjectItemsController', ProjectItemsController);

    ProjectItemsController.$inject = ['projectItems', '$state'];

    function ProjectItemsController(projectItems, $state) {
        let ctrl = this;

        ctrl.project = projectItems.project;
        ctrl.items = projectItems.items;

        ctrl.removeItem = function (item) {
            let itemIndex = ctrl.items.findIndex(i => i.id === item.id);

            ctrl.items.splice(itemIndex, 1);
        };

        ctrl.editItem = function (item) {
            $state.go('main.item-form', {'item': item, 'isNew': false});
        };
    }
})();