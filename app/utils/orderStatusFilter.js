(function () {
    angular.module('app')
    .filter('productStatusFilter', function(){
        return function(item){
            var orderStatus = {
                "pick_up_cancel": "Order Pick up cancel",
                "assign_da_for_delivery": "Assign DA for delivery",
                "pick_up_confirm": "Order Pick Up confirm",
                "cancel_deliver_at_station": "Cancel delivery at station",
                "pick_by_3pl": "Pick up 3pl",
                "deliver_by_3pl_at_station": "Deliver by 3pl",
                "pick_up_assign": "Order assign to pick up",
                "deliver_to_customer": "Order Deliver to customer",
                "assign_to_3pl": "Order Assigned to 3pl",
                "new": "Order Created",
                "delivery_at_stattion": "Confrim Delivery to station",
                "work_start_on_pickup": "Order Pick up Start"
            }
            return orderStatus[item]
        }
    })
})();
