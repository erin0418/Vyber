var authPersonality = require("../keys/personalityKey");
var authTone = require("../keys/toneKey");
var tweets;

module.exports = function(app) {
  app.post("api/personality", function(req, res) {
    console.log(true);
    var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
    var personalityInsights = new PersonalityInsightsV3({
      version: authPersonality.version,
      username: authPersonality.username,
      password: authPersonality.password
    });
    var profileParams = {
      content: tweets,
      content_type: "text/plain",
      consumption_preferences: true,
      raw_scores: true
    };
    personalityInsights.profile(profileParams, function(error, profile) {
      if (error) {
        console.log(error);
      } else {
        res.json(JSON.stringify(profile, null, 2));
      }
    });
  });

  app.get("api/tone", function(req, res) {
    var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

    var toneAnalyzer = new ToneAnalyzerV3({
      version: authTone.version,
      username: authTone.username,
      password: authTone.password
    });
    var text = userText;

    var toneParams = {
      tone_input: { text: text },
      content_type: "application/json"
    };

    toneAnalyzer.tone(toneParams, function(error, analysis) {
      if (error) {
        console.log(error);
      } else {
        console.log(JSON.stringify(analysis, null, 2));
      }
    });
    0;
    res.json(analysis);
  });
};
