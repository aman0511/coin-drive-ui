(function () {
    angular.module('app').factory('UserFactory', function (API_URL, Restangular) {
        var user = {};

        // Login
        user.loginUser = function (data) {
            return Restangular.one(API_URL.ACCOUNT_LOGIN).customPOST(data);
        };
        user.logout = function (data) {
            return Restangular.one(API_URL.ACCOUNT_LOGOUT).customPOST(data)
        }
        user.forgotPassword = function (data) {
            return Restangular.one(API_URL.FORGOT_PASSWORD).customPOST(data);
        }

        user.resetPassword = function (data) {
            return Restangular.one(API_URL.RESET_PASSWORD).customPOST(data);
        }

        user.getProfileDetails = function () {
            return Restangular.one(API_URL.ACCOUNT_ME).customGET()
        }

        user.logout = function () {
            return Restangular.one(API_URL.ACCOUNT_LOGOUT).customPOST();
        }

        user.addNewDa = function (data) {
            return Restangular.one(API_URL.ADD_DA).customPOST(data);
        }

        return user;
    })
})();
