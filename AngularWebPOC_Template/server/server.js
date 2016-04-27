#!/usr/bin/env node

var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  basicAuth = require('./middleware/auth/basic-auth'),
  fs = require('fs'),
  http = require('http'),
  https = require('https'),
  httpProxy = require('http-proxy'),
  _ = require('lodash'),
  config = require('./config');

/**
 * Read in this environments configuration for proxies.
 * Create some proxy servers based off that config.
 */
var proxies = _.map(config.proxies, function (proxyConfig) {
  var proxy = httpProxy.createProxyServer({
    target: proxyConfig.target,
    secure: proxyConfig.secure || false,
    header: proxyConfig.headers || null
  });

  proxy.on('error', function () {
    console.log('Proxy error occurred', arguments);
  });

  proxy._matcher = proxyConfig.matcher;
  proxy._target = proxyConfig.target;
  return proxy;
});

/**
 * Middleware setup to listen for requests that may need to be proxied somewhere.
 * @param req
 * @param res
 */
var router = function (req, res) {

  var i = 0;

  function next() {
    var proxy = proxies[i++];
    if (proxy) {
      proxy._matcher(req, function (match) {
        if (match) {
          return proxy.web(req, res);
        }
        else {
          setTimeout(next, 1);
        }
      });
    } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("You don't have any proxies configured for this enviornment. You need at least one that redirects to your express application.");
      res.end();
    }
  }

  next();

};

// Only listen for HTTPS if a port is defined
var httpsPort = process.env.HTTPS_PORT || config.server.httpsPort || false;
if (httpsPort) {
  https.createServer({
    key: fs.readFileSync(__dirname + '/keys/development.key'),
    cert: fs.readFileSync(__dirname + '/keys/development.crt')
  }, router).listen(httpsPort, function () {
    console.log('Listening for HTTPS connections on port %s', httpsPort);
  });
}

// Always listen for HTTP connections
var httpPort = process.env.PORT || config.server.httpPort || 9000;
http.createServer(router).listen(httpPort, function () {
  console.log('Listening for HTTP connections on port %s', httpPort);
});

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
if (config.server.auth) {
  app.use(basicAuth(config.server.auth.username, config.server.auth.password));
}

// Static Resources
console.log('Using dirname: %s', __dirname);
config.server.staticFolders.forEach(function (path) {
  var fullPath = __dirname + '/../' + path;
  console.log('Mounting static folder at: %s', fullPath);
  app.use(express.static(fullPath));
});

require('./routes')(app, config);
var port = config.server.appPort;
console.log("Starting app server on port %s", port);
app.listen(port);

module.exports = app;
