(function () {
    angular.module('app').controller('InventoryController', function ($rootScope, InventoryFactory, localStorageService, $state, $stateParams) {
        var vm = this;
        
        vm.addNewInventory = function () {
            var data = vm.inventory;
            InventoryFactory.addInventory(data)
                .then(function (response) {
                    $state.go("app.dashboard.new-Inventory");
                }, function (error) {
                    vm.serverErrors = error.data;
                });
        };

        vm.inventoryList = function () {
            vm.inventory_type = $state.current.data.status;
            var filter_data = {
                'inventory_type': $state.current.data.status,
                'page': vm.current_page,
                'status': vm.status,
                'search': vm.search
            }
            InventoryFactory.getInventory(filter_data)
            .then(function(response){
                console.log(response.plain);
                vm.inventorys = response.plain()
            }, function(error){

            });
        }

        vm.getInventoryDetails = function(){
            var id = $stateParams.id;
            InventoryFactory.getInventoryDetails(id).
            then(function(response){
                vm.inventory = response.plain();
                vm.serverErrors = null;
            }, function(error){
                vm.serverErrors = error.data;
            })
        }
    });
})();
