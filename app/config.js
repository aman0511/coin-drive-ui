(function(){
	angular.module('app').config(function(RestangularProvider, API_URL, $httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
		RestangularProvider.setBaseUrl(API_URL.API_SERVER);
		RestangularProvider.setRequestSuffix('/');
	});

	angular.module('app').run(function($state, Auth, $rootScope) {				
		/* eslint-disable */		
		Auth.init();
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			if(Auth.isLoggedIn()){
				if(toState.name === "app.public.login"){
					event.preventDefault();
					$state.go("app.dashboard.new-order");
				}
			}
		});

		/* eslint-enable */
	});	
})();

