describe('Page 2 Controller', function() {
  beforeEach(module('ngmp.page2.controller'));

  var controller, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('Page2Ctrl', {
      $scope: scope
    });
  }));

  it('should set a message on the scope', function() {
    expect(scope.message).toBe('Page 2 Controller');
  });

});