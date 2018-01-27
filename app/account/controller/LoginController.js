(function () {
    angular.module('app').controller('LoginController', function ($rootScope, UserFactory, localStorageService, $state, ngToast) {
        var vm = this;
        vm.login = function () {
            // Login 
            console.log("controllr call");
            var data = {
                'username': vm.username,
                'password': vm.password
            }
            UserFactory.loginUser(data)
                .then(function (response) {
                    localStorageService.set('token', response.auth_token);
                    // Getting The Details Of Current user
                    UserFactory.getProfileDetails().then(function (response) {
                        localStorageService.set('user', response.plain());
                        $rootScope.user = response.plain();
                        vm.serverErrors = null;
                        $state.go("app.dashboard.new-order");
                    }, function (error) {
                        vm.serverErrors = error.data;
                    });
                }, function (error) {
                    vm.serverErrors = error.data;
                });
        };
    });
})();
