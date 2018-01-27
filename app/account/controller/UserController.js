(function () {
    angular.module('app').controller('UserController', function ($rootScope, UserFactory, localStorageService, $state, $stateParams, Auth) {
        var vm = this;

        vm.forgotPassword = function () {
            // send mail for the forgot password
            var data = {
                'email': vm.email
            };
            UserFactory.forgotPassword(data)
                .then(function (success) {
                    vm.serverErrors = null;
                    $state.go("app.public.mail-sent");
                }, function (error) {
                    vm.serverErrors = error.data;
                })
        };

        vm.resetPassword = function () {
            var data = {
                'uid': $stateParams.uuid,
                'token': $stateParams.token,
                'new_password': vm.password
            }
            UserFactory.resetPassword(data)
                .then(function (success) {
                    vm.serverErrors = null;
                    $state.go('app.public.password-changed');
                }, function (error) {
                    vm.serverErrors = error.data;
                });
        }
    });
})();
