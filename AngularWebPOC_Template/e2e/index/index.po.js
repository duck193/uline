/**
 * This file uses the Page Object pattern to define the index page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var IndexPage = function() {
  this.headerView = element(by.css('.header-view'));
  this.sampleView1 = element(by.css('.sample-view-1'));
  this.sampleView2 = element(by.css('.sample-view-2'));
  this.footerView = element(by.css('.footer-view'));

  this.get = function() {
    browser.get('/');
  };

};

module.exports = new IndexPage();

