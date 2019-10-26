(function () {
        "use strict";

        angular.module('extension')
            .service('TodoItemService', TodoItemService);

        TodoItemService.$inject = ['$mdDialog', '$http', 'ApiBasePath', 'LoginDataService'];

        function TodoItemService($mdDialog, $http, ApiBasePath, LoginDataService) {
            let service = this;

            service.getFormattedDate = function (date) {
                let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
                return `${date.getFullYear()}-${date.getMonth() + 1}-${day}T00:00:00`;
            };

            service.getDeadlineStr = function (item) {
                let todayDate = new Date().getTime();
                let itemDeadline = Date.parse(item.deadline);

                if (todayDate > itemDeadline) {
                    return 'today';
                } else {
                    let daysLeft = Math.ceil((itemDeadline - todayDate) / (1000 * 3600 * 24));
                    return `${daysLeft}d left`;
                }
            };

            service.uncheckLoggedItem = function (item, removeMethod) {
                let confirm = $mdDialog.confirm()
                    .title('Uncheck TO-DO item')
                    .textContent('This TO-DO is already logged. Are you sure you want to mark it as incomplete?')
                    .ariaLabel('Question')
                    .ok('Yes')
                    .cancel('No');

                $mdDialog.show(confirm).then(function () {
                    item.completeDate = '1754-01-01T00:00:00';
                    service.updateItem(item).then(function (result) {
                        removeMethod({item: item});
                    }).catch(function () {
                        return false;
                    })
                }).catch(function () {
                    return false;
                });
            };

            function convertToFullNumber(number) {
                return number > 9 ? number : `0${number}`;
            }

            service.checkItem = function (item, removeMethod) {
                let todayDate = new Date();
                let day = convertToFullNumber(todayDate.getUTCDate());
                let month = convertToFullNumber(todayDate.getUTCMonth() + 1);
                let hours = convertToFullNumber(todayDate.getUTCHours());
                let minutes = convertToFullNumber(todayDate.getUTCMinutes());
                let seconds = convertToFullNumber(todayDate.getUTCSeconds());

                item.completeDate = `${todayDate.getUTCFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}.${todayDate.getUTCMilliseconds()}`;

                service.updateItem(item).then(function (result) {
                    if (result) {
                        removeMethod({item: item});
                    }
                }).catch(function () {
                    return false;
                });
            };

            service.addItem = function (item) {
                let sendingItem = Object.assign({}, item);

                sendingItem.credential = LoginDataService.getLoginHash();

                return $http({
                    method: 'POST',
                    url: `${ApiBasePath}/todoitems`,
                    data: JSON.stringify(sendingItem)
                }).then(function (response) {
                    if (response.status !== 200) {
                        alert('Not added');
                        return false;
                    }

                    return true;
                }).catch(function () {
                    alert('Server error');
                    return false;
                })
            };

            service.deleteItem = function (item) {
                console.log(item);
                return $http({
                    method: 'POST',
                    url: `${ApiBasePath}/todoitems/${item.id}`,
                    data: JSON.stringify({credential: LoginDataService.getLoginHash()})
                }).then(function (response) {
                    if (response.data.statusCode !== 200) {
                        alert('Not deleted');
                        return false;
                    }

                    return true;
                }).catch(function () {
                    alert('Server error');
                    return false;
                })
            };

            service.updateItem = function (item) {
                let sendingItem = Object.assign({}, item);

                sendingItem.credential = LoginDataService.getLoginHash();

                return $http({
                    method: 'PUT',
                    url: `${ApiBasePath}/todoitems`,
                    data: JSON.stringify(sendingItem)
                }).then(function (response) {
                    if (response.data.statusCode !== 200) {
                        alert('Not modified');
                        return false;
                    }

                    return true;
                }).catch(function () {
                    alert('Server error');
                    return false;
                });
            }
        }
    }
)();