'use strict';

angular.module('ngmp.directives.sampleDirective', [])
  .controller('sampleDirectiveCtrl', ['$scope', function(/*$scope*/) {

  }])

  .directive('sampleDirective', [function() {
      return {
        restrict: 'E',
        scope: {
        },
        controller: 'sampleDirectiveCtrl',
        templateUrl: 'app/common/directives/sample-directive/sample.directive.template.html'
      };
    }
  ]);
