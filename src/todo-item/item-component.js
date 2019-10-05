(function () {
    "use strict";

    angular.module('extension')
        .component('todoItem', {
            templateUrl: 'src/todo-item/todoItem.html',
            controller: 'TodoItemController',
            bindings: {
                item: '<',
                projectName: '<',
                onRemove: '&'
            }
        });
})();