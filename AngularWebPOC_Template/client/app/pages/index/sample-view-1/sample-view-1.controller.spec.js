describe('Sample View 1 Controller', function() {

  beforeEach(module('ngmp.index.sampleView1.controller'));

  var sampleView1Controller, scope, mockCmsService = {};
  beforeEach(inject(function ($controller, $rootScope, $q) {
    mockCmsService = {
      getSampleResponse: jasmine.createSpy().and.returnValue($q.when({
        message: 'Hello world!'
      }))
    };
    scope = $rootScope.$new();
    sampleView1Controller = $controller('SampleView1Ctrl', {
      $scope: scope,
      cmsService: mockCmsService
    });
  }));

  it('should set the message, date and sample model on the scope', function() {
    expect(scope.message).toBeTruthy();
    expect(scope.aDate).toBeTruthy();
    expect(scope.sampleModel).toBeTruthy();
  });

  it('should load data from the CMS, then set on the scope', function() {
    expect(scope.sampleResponseData).toBeFalsy();

    // Trigger a digest cycle, which will allow the deferred returned by the 
    // mockCmsService.getSampleResponse method to be resolved
    scope.$digest();
    expect(scope.sampleResponseData).toBeTruthy();
  });

});