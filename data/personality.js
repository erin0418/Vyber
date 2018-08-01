var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
var authPersonality = require("../keys/personalityKey");
var tweets =
  "Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson.";

var personality = {
  personalityInsights: new PersonalityInsightsV3({
    version: authPersonality.version,
    username: authPersonality.username,
    password: authPersonality.password
  }),
  profileParams: {
    content: tweets,
    content_type: "text/plain",
    consumption_preferences: true,
    raw_scores: true
  }
};

module.exports = personality;
