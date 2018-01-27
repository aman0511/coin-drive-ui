(function () {
    angular
        .module('app')
        .factory('Auth', function ($rootScope, localStorageService, $window, $state) {
            var auth = {};

            auth.init = function () {
                if (auth.isLoggedIn()) {
                    $rootScope.user = auth.currentUser();
                }
            };

            auth.setPermissionsValue = function (permissions) {
                $rootScope.PERMISSIONS = permissions;
            }

            auth.logout = function () {
                localStorageService.remove('token', 'user');
                delete $rootScope.user;
            };

            auth.currentUser = function () {
                return localStorageService.get('user');
            };

            auth.isLoggedIn = function () {
                return localStorageService.get('user') != null;
            };

            auth.isAnonymous = function () {
                return localStorageService.get('user') == null;
            };

            auth.checkPermissionForView = function (view) {

                if (!view.requiresAuthentication) {
                    return true;
                }
                return userHasPermissionForView(view);
            };

            var userHasRole = function (roles) {

                // check user has role from the list of roles
                var myrRole = localStorageService.get('user').role;

                var found = false;
                if (roles.indexOf(myrRole) >= 0) {// user_permissions is object received from backend
                    found = true;
                }
                return found

            }

            var userHasPermissionForView = function (view) {

                if (!auth.isLoggedIn()) {
                    return false;
                }
                if (!view.roles) {
                    return true;
                }

                return userHasRole(view.roles);
            };



            auth.userHasPermission = function (permissions) {
                if (!auth.isLoggedIn()) {
                    return false;
                }

                var myPermissions = localStorageService.get('user').permissions;
                var found = false;
                angular.forEach(permissions, function (permission, index) {
                    if (myPermissions.indexOf(permission) >= 0) {// user_permissions is object received from backend
                        found = true;
                        return;
                    }
                });

                return found;
            };


            auth.connectivity_check = function () {
                $rootScope.online = $window.navigator.onLine;

                $window.addEventListener("offline", function () {
                    $rootScope.$apply(function () {
                        $rootScope.online = false;
                    });
                }, false);

                $window.addEventListener("online", function () {
                    $rootScope.$apply(function () {
                        $rootScope.online = true;
                    });
                }, false);
            };

            return auth;
        });
})();
