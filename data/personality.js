// Require twitter information
var Tweets = require("")

var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
var authPersonality = require("../keys/personalityKey");

var personalityInsights = new PersonalityInsightsV3({
    version: authPersonality.version,
    username: authPersonality.username,
    password: authPersonality.password
  }),
var profileParams = {
    // Add in tweets.() to call all tweets
    content: Tweets.text,
    content_type: "text/plain",
    consumption_preferences: true,
    raw_scores: true
  }

  personalityInsights.profile(profileParams, function (error,analysis){
    if(err){
      console.log(error);
    }
    else {
      analysis
    }
  })

module.exports = {
  result: analysis
}