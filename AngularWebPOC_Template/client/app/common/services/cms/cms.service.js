'use strict';
angular.module('ngmp.services.cms', ['ngmp.config.api'])
  .factory('cmsService', ['$http', '$q', 'apiConfig', function($http, $q, apiConfig) {
    return {
      getSampleResponse: function() {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(apiConfig.ENDPOINTS.cmsSample).then(function(resp) {
          deferred.resolve(resp.data);
        });

        return promise;
      }
    };
  }]);
