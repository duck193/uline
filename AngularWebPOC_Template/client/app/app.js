'use strict';

angular.module('ngmp', [
  'ngCookies',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(false);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        var tokenCookie = $cookieStore.get('token');

        if (tokenCookie) {
          config.headers.Authorization = 'Bearer ' + tokenCookie;
        }

        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function (response) {
        var HTTP_UNAUTHORIZED = 401;

        if (response.status === HTTP_UNAUTHORIZED) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
        }

        return $q.reject(response);
      }
    };
  })

  .controller('AppCtrl', function () { })

  .run(function ($rootScope) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (/*event, next*/) {
      // Auth.isLoggedInAsync(function(loggedIn) {
      //   if (next.authenticate && !loggedIn) {
      //     $location.path('/login');
      //   }
      // });
    });
  });
