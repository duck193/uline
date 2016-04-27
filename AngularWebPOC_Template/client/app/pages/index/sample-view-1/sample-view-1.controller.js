angular.module('ngmp.index.sampleView1.controller', [
  'ngmp.services.cms',
  'ngmp.models.sampleModel',
  'ngmp.directives.sampleDirective'
])
  .controller('SampleView1Ctrl', function ($scope, cmsService, SampleModel) {
    $scope.message = 'I am Sample View 1.';
    $scope.aDate = new Date();
    $scope.sampleModel = new SampleModel('sample prop value');

    cmsService.getSampleResponse().then(function(sampleResponseData) {
      $scope.sampleResponseData = sampleResponseData;
    });
  });