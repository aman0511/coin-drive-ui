(function () {
    angular.module('app').factory('InventoryFactory', function (API_URL, Restangular) {
        var inventory = {};

        // inventory
        inventory.addInventory = function (data) {
            return Restangular.one(API_URL.INVENTORY).customPOST(data);
        };

        inventory.getInventory = function (data) {
            return Restangular.one(API_URL.INVENTORY).customGET('', data);
        }

        inventory.getInventoryDetails = function(id){
            return Restangular.one(API_URL.INVENTORY).customGET(id,{});
        }
        return inventory;
    })
})();
