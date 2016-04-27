module.exports = {
  server: {
    httpPort: 9000,
    httpsPort: 9443,
    appPort: 9080,
    //on heroku the server is ran out of dist/server. The public folder is at dist/public. The server goes one level up, then appends this.
    staticFolders: ['./public'],
    auth: {
      username: 'demo',
      password: 'd3mo'
    }
  },
  // https://www.npmjs.com/package/http-proxy
  // One example proxy is shown. Uncomment and modify if you'd like to
  // use proxies for this env.
  proxies: [
//    {
//      target: "http://proxytome.com" // location you want to proxy to
//      secure: true/false,
//      matcher: function(req, callback) {
//        var doProxy = true;       // determine this from running a regex on the req url
//        return callback(doProxy);
//      }
//    }
    //Default Proxy, just goes to our express server.
    {
      target: 'http://localhost:9080',
      matcher: function(req, callback) {
        return callback(true);
      }
    }
  ]
};
