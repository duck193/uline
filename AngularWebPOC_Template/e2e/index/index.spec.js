'use strict';

describe('E2E: Main View', function() {
  var page;

  beforeEach(function() {
    page = require('./index.po');
    page.get();
  });

  it('should load headerView', function() {
    expect(page.headerView).toBeDefined();
  });

  it('should load sampleView1', function() {
    expect(page.sampleView1).toBeDefined();
  });

  it('should load sampleView2', function() {
    expect(page.sampleView2).toBeDefined();
  });

  it('should load footerView', function() {
    expect(page.footerView).toBeDefined();
  });
});
