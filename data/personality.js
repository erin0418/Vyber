// Require twitter information
var Tweets = require("../data/twitter")

var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
var authPersonality = require("../keys/personalityKey");
var analysis;

var personalityInsights = new PersonalityInsightsV3({
    version: authPersonality.version,
    username: authPersonality.username,
    password: authPersonality.password
  })
var profileParams = {
    // Add in tweets.contentItems to call all tweets
    content: Tweets.contentItems, 
    content_type: "json/application",
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