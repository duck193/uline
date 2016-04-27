var express = require('express'),
  cmsHandler = require('./handlers/cms-handler');

module.exports = function (app, config) {

  app.get('/api/cms/sample', function(req, res) {
    cmsHandler.getSampleResponse(req, res);
  });

  //You'll know the proxy is on
  app.get('/rest/helloworld', function (req, res) {
    res.json(config);
  });
};
