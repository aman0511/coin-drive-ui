(function () {
    angular.module('app').constant('API_URL', {
        API_SERVER: 'http://localhost:8000/api/v1/',
        ACCOUNT_LOGIN: 'account/login/',
        ACCOUNT_ME: 'account/me',
        ACCOUNT_LOGOUT:'account/logout',
        FORGOT_PASSWORD: 'account/forgot-password',
        RESET_PASSWORD: 'account/reset-password',
        INVENTORY: 'inventory/',
    });
})();
