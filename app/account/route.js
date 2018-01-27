(function () {
    angular.module('app').config(function ($stateProvider) {
        $stateProvider
            .state('app.public', {
                abstract:true,
                templateUrl: 'app/account/view/public.html'
            })
            .state('app.public.login', {
                url: '/login',
                templateUrl: 'app/account/view/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl',
            })
            .state('app.public.register', {
                url: '/register',
                templateUrl: 'app/account/view/register.html',
            })
            .state('app.public.forgot', {
                url: '/forgot-password',
                templateUrl: 'app/account/view/forgot-password.html',
                controller: 'UserController',
                controllerAs: 'UserCtrl',
            })
            .state('app.public.reset', {
                url: '/reset-password/:uuid/:token',
                templateUrl: 'app/account/view/reset-password.html',
                controller: 'UserController',
                controllerAs: 'UserCtrl'
            })
            .state('app.public.success', {
                url: '/thank-you',
                templateUrl: 'app/account/view/thank-you.html',
            })
            .state('app.public.mail-sent', {
                url: '/mail-sent',
                templateUrl: 'app/account/view/mail-sent.html',
            })
            .state('app.public.password-changed', {
                url: '/password-changed-successfully',
                templateUrl: 'app/account/view/password-changed.html',
            })
    });
})();
