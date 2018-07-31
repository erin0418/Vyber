var db = require("../models");

module.exports = function(app) {
  app.get("api/personality", function(req, res) {
    db.pesonalityInsights.findAll({}).then(function(personalityResults) {
      res.json(personalityResults);
    });
  });

  app.get("api/tone", function(req, res) {
    db.toneAnalyzer.findAll({}).then(function(toneResults) {
      res.json(toneResults);
    });
  });
};
