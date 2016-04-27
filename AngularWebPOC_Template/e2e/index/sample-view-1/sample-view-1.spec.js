'use strict';

describe('E2E: Sample View 1', function() {
  var page;

  beforeEach(function() {
    page = require('./sample-view-1.po');
    page.get();
  });

  it('should have section header', function() {
    expect(page.header.getText()).toBe('Sample View 1');
  });

  it('should display a message', function() {
    expect(page.message.getText()).toBe('I am Sample View 1.');
  });

});
