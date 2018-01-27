(function() {
	angular
		.module('app')
		.factory('AuthInterceptor',function($q, $injector, localStorageService){
			return {
				request: function(config) {
	                $("#mydiv").show();
	                var token = localStorageService.get('token');
	                if (token) {
	                    config.headers = config.headers || {};
	                    config.headers.Authorization = "Token " + token;
	                }
	                return config;
	            },
	            response: function(response) {
	                $("#mydiv").hide();
	                return response;
	            },
				responseError: function(rejection) {
                	$("#mydiv").hide();
					if(rejection !== null && rejection.status === 401){
						localStorageService.remove('user','token');
						$injector.get('$state').transitionTo('app.login');
					}

					if(rejection !== null && rejection.status === 403){
						$injector.get('$state').transitionTo('app.permissions-denied');
					}

					return $q.reject(rejection);
				}
			}
		});
})();
