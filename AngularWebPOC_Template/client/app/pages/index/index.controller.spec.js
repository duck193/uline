describe('Index Controller', function() {
  beforeEach(module('ngmp.index.controller'));

  var indexController, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    indexController = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should set a message on the scope', function() {
    expect(scope.message).toBe('Index Controller');
  });

});