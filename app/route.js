(function(){
	'use strict';
	angular.module('app').config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/login');
        $stateProvider
        .state('app', {
            abstract: true,
            template : '<ui-view />'
        })
        .state('app.dashboard', {
            abstract: true,
            templateUrl : 'app/utils/view/dashboard.html'
        })
        .state('app.permissions-denied', {
            url:'/permissions-denied',
            templateUrl:'app/utils/view/403.html'
        });
	});
})();
