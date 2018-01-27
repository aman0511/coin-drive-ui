(function () {
    angular.module('app')
        .controller("LogoutController", function ($scope, $state, $uibModalInstance, UserFactory, Auth ) {
            var vm = this;

            vm.logout = function(){
              UserFactory.logout()
              .then(function(success){
                  Auth.logout();
                  $uibModalInstance.dismiss();
                  $state.go("app.public.login");

              }, function(error){
                  vm.serverErrors = error.data;
              });
            }
            vm.closeModal = function(){
                $uibModalInstance.dismiss();
            }
           });
})();