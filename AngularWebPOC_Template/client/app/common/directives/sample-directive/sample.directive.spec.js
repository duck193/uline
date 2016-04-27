describe('Sample Directive', function () {
  beforeEach(module('ngmp.directives.sampleDirective'));
  beforeEach(module('templates-app'));

  var element, scope;
  beforeEach(inject(function ($compile, $rootScope) {
    element = angular.element('<div><sample-directive></sample-directive></div>');
    scope = $rootScope.$new();

    $compile(element)(scope);
    scope.$digest();
  }));

  it('should display a message', function() {
    var label = element.find('h3');
    var text = label.text();
    expect(text).toBe('This directive does nothing!');
  });

});
