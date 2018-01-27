(function () {
    angular.module('app').directive("orderStatus", function (OrderFactory) {
        return {
            restrict: 'E',
            templateUrl: "app/utils/view/order-status.html",
            scope: {
                ngModel: "=",
                orderType: "@"
            },
            controller: function ($scope) {
                $scope.getOrderStatus = function () {
                    var data={
                        'order_type':$scope.orderType
                    }
                    console.log(data);
                    OrderFactory.getOrderStatus(data)
                        .then(function (response) {
                            $scope.status = response.plain();
                        }, function (error) {

                        });
                }
            }
        }
    });
})();