(function () {
    angular.module('app').config(function ($stateProvider) {
        $stateProvider
            .state('app.dashboard.new-inventory', {
                url: '/new-inventory',
                templateUrl: 'app/inventory/view/new-inventory.html',
                controller: 'InventoryController',
                controllerAs: 'InventoryCtrl',
                data:{
                    'status': "pick_up"
                },
                ncyBreadcrumb: {
                    label: 'New Inventory'
                }
            })
            .state('app.dashboard.approve-inventory', {
                url: '/approve-inventory',
                templateUrl: 'app/inventory/view/inventory.html',
                controller: 'InventoryController',
                controllerAs: 'InventoryCtrl',
                data:{
                    'status': "delivery"
                },
                ncyBreadcrumb: {
                    label: 'Approve Inventory'
                }
            })
            .state('app.dashboard.pending-inventory', {
                url: '/pending-inventory',
                templateUrl: 'app/inventory/view/inventory.html',
                controller: 'InventoryController',
                controllerAs: 'InventoryCtrl',
                data:{
                    'status': "delivery"
                },
                ncyBreadcrumb: {
                    label: 'Approve Inventory'
                }
            })
    });
})();
