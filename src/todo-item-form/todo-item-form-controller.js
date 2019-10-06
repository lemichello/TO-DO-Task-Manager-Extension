(function () {
    "use strict";

    angular.module('extension')
        .controller('TodoItemFormController', TodoItemFormController);

    TodoItemFormController.$inject = ['todoItem', 'isNew', 'sharedProjects', 'TodoItemService', '$state'];

    function TodoItemFormController(todoItem, isNew, sharedProjects, TodoItemService, $state) {
        let ctrl = this;

        ctrl.minDate = new Date();

        ctrl.item = todoItem;
        ctrl.isNew = isNew;

        ctrl.sharedProjects = sharedProjects;
        ctrl.selectedSharedProject = null;

        ctrl.$onInit = function () {
            if (ctrl.item.date === '1754-01-01T00:00:00') {
                ctrl.item.date = null;
            }

            if (ctrl.item.deadline === '1754-01-01T00:00:00') {
                ctrl.item.deadline = null;
            }

            ctrl.selectedSharedProject = ctrl.item.projectId;
        };

        ctrl.confirm = function () {
            ctrl.item.date = ctrl.item.date === null
                ? '1754-01-01T00:00:00'
                : TodoItemService.getFormattedDate(ctrl.item.date);
            ctrl.item.deadline = ctrl.item.deadline === null
                ? '1754-01-01T00:00:00'
                : TodoItemService.getFormattedDate(ctrl.item.deadline);

            ctrl.item.projectId = ctrl.selectedSharedProject;

            TodoItemService.addItem(ctrl.item).then(function () {
                $state.go('main');
            });
        };

        ctrl.deleteItem = function () {
            TodoItemService.deleteItem(ctrl.item);
            $state.go('main');
        };
    }
})();