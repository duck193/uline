var basicAuth = require('basic-auth');

module.exports = function auth(username, password) {
  'use strict';

  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  return function (req, res, next) {
    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
      return unauthorized(res);
    }

    if (user.name === username && user.pass === password) {
      return next();
    } else {
      return unauthorized(res);
    }
  };

};
