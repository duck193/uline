/**
 * This file uses the Page Object pattern to define the sample view 2 section for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var SampleView2 = function() {
  this.view = element(by.css('.sample-view-2'));
  this.header = this.view.element(by.css('h2'));
  this.message = this.view.element(by.css('.message'));
  this.inputMessageBox = this.view.element(by.css('.input-message-box'));

  this.get = function() {
    browser.get('/');
  };
};

module.exports = new SampleView2();

