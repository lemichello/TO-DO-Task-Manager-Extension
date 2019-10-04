(function () {
    "use strict";

    angular.module('extension')
        .controller('TodoItemController', TodoItemController);

    function TodoItemController() {
        let ctrl = this;

        ctrl.$onInit = function () {
            ctrl.isWithoutNotes = ctrl.item.notes === "";

            if (ctrl.item.deadline !== '1754-01-01T00:00:00') {
                let todayDate = new Date().getTime();
                let itemDeadline = Date.parse(ctrl.item.deadline);

                if (todayDate > itemDeadline) {
                    ctrl.deadlineStr = 'today';
                } else {
                    let daysLeft = Math.ceil((itemDeadline - todayDate) / (1000 * 3600 * 24));
                    ctrl.deadlineStr = `${daysLeft}d left`;
                }
            }
        };
    }
})();