describe('Sample View 4 Controller', function() {
  beforeEach(module('ngmp.page2.sampleView4.controller'));

  var controller, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('SampleView4Ctrl', {
      $scope: scope
    });
  }));

  it('should set a message on the scope', function() {
    expect(scope.message).toBe('I am Sample View 4.');
  });

});