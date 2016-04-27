'use strict';
describe('Service: cmsService', function() {
  var scope,
    cmsImages,
    httpBackend,
    cmsService,
    mockData = 'test';

  beforeEach(module('ngmp.services.cms'));

  beforeEach(inject(function($rootScope, $httpBackend, _cmsService_) {
    scope = $rootScope.$new();
    cmsService = _cmsService_;
    httpBackend = $httpBackend;
    httpBackend.whenGET('/api/cms/sample').respond(mockData);
    cmsImages = cmsService.getSampleResponse();
    scope.$digest();
  }));

  it('should call cms api', function() {
    var respData;

    cmsImages.then(function(data) {
      respData = data;
    });
    httpBackend.flush();
    httpBackend.expectGET('/api/cms/sample');
    expect(respData).toEqual(mockData);
  });
});
