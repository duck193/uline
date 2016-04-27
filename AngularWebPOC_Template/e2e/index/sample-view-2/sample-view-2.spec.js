'use strict';

describe('E2E: Sample View 2', function() {
  var page;

  beforeEach(function() {
    page = require('./sample-view-2.po');
    page.get();
  });

  it('should have section header', function() {
    expect(page.header.getText()).toBe('Sample View 2');
  });

  it('should display the same message as input', function() {

    var message = 'sample message';

    page.inputMessageBox.sendKeys(message);
    expect(page.message.getText()).toBe(message);
  });

});
