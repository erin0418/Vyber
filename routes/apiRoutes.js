var Personality = require("../data/personality.js");
var dataTone = require("../data/tone.js");

module.exports = function(app) {
  app.post("api/personality", function(req, res) {
    Personality.personalityInsights.profile(Personality.profileParams, function(
      error,
      profile
    ) {
      if (error) {
        console.log(error);
      } else {
        res.send(JSON.stringify(profile, null, 2));
      }
    });
  });

  app.post("api/tone", function(req, res) {
    res.send(dataTone);
  });
};
