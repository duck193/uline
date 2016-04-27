angular.module('ngmp.index.sampleView2.controller', [])
  .controller('SampleView2Ctrl', function ($scope) {
    $scope.message = '';

    this.sendMessage = function (message) {
      $scope.sentMessage = message;
    };
  });
