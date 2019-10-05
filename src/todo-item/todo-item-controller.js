(function () {
    "use strict";

    angular.module('extension')
        .controller('TodoItemController', TodoItemController);

    TodoItemController.$inject = ['TodoItemService'];

    function TodoItemController(TodoItemService) {
        let ctrl = this;

        ctrl.$onInit = function () {
            ctrl.isWithoutNotes = ctrl.item.notes === "";
            ctrl.isChecked = ctrl.projectName === 'Logbook';
            ctrl.removeMethod = ctrl.onRemove;

            if (ctrl.item.deadline !== '1754-01-01T00:00:00') {
                ctrl.deadlineStr = TodoItemService.getDeadlineStr(ctrl.item);
            }
        };

        ctrl.checkedChanged = function () {
            if (ctrl.projectName === 'Logbook') {
                ctrl.isChecked = false;
                TodoItemService.uncheckLoggedItem(ctrl.item, ctrl.removeMethod);
            } else {
                TodoItemService.checkItem(ctrl.item, ctrl.removeMethod);
            }
        }
    }
})();