var dataPersonality = require("../data/personality");
var dataTone = require("../data/tone");

module.exports = function(app) {
  app.get("api/personality", function(req, res) {
    res.json(dataPersonality);
  });

  app.get("api/tone", function(req, res) {
    res.json(dataTone);
  });
};
