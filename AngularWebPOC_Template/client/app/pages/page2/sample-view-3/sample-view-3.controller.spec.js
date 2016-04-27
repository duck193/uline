describe('Sample View 3 Controller', function() {
  beforeEach(module('ngmp.page2.sampleView3.controller'));

  var controller, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('SampleView3Ctrl', {
      $scope: scope
    });
  }));

  it('should set a message on the scope', function() {
    expect(scope.message).toBe('I am Sample View 3.');
    expect(scope.aDate instanceof Date).toBeTruthy();
  });

});