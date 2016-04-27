var sampleResponse = require('../data/cms/sample-response');

module.exports = {
  getSampleResponse: function(req, res) {
    res.json(sampleResponse);
  }
};
