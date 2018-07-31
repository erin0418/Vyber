var authPersonality = require("../keys/personalityKey");
var tweets =
  "Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson.";
var results;

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
    JSON.stringify(profile, null, 2);
    results = profile;
  }
});

module.exports = results;
