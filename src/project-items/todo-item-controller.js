(function () {
    "use strict";

    angular.module('extension')
        .controller('TodoItemController', TodoItemController);

    function TodoItemController() {
        let ctrl = this;

        ctrl.$onInit = function () {
            ctrl.isWithoutNotes = ctrl.item.notes === "";
        };
    }
})();