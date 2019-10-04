(function () {
    "use strict";

    angular.module('extension')
        .component('todoItem', {
            templateUrl: 'src/project-items/todoItem.html',
            controller: 'TodoItemController',
            bindings: {
                item: '<'
            }
        });
})();