describe('Sample View 2 Controller', function() {
  
  beforeEach(module('ngmp.index.sampleView2.controller'));

  var sampleView2Controller, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    sampleView2Controller = $controller('SampleView2Ctrl', {
      $scope: scope
    });
  }));

  it('should set the sent message on the scope', function() {
    var message = 'Hello World!';
    sampleView2Controller.sendMessage(message);

    expect(scope.sentMessage).toBe(message);
  });

});