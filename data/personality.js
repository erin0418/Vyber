
module.exports =  function (Tweets) {

  return new Promise((resolve, reject) =>{
    var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
    var authPersonality = require("../keys/personalityKey");
    var analysis;

    var personalityInsights = new PersonalityInsightsV3({
      version: authPersonality.version,
      username: authPersonality.username,
      password: authPersonality.password
    })

    var stringForParams;
    for (var i = 0; i < Tweets.contentItems.length; i++) {
      // console.log(Tweets);
      stringForParams += Tweets.contentItems[i].content;
    }
    var profileParams = {
      // Add in tweets.contentItems to call all tweets
      content: stringForParams,
      content_type: "text/plain",
      consumption_preferences: true,
      raw_scores: true
    }

    personalityInsights.profile(profileParams, function (error, analysis) {
      if (error) {
        console.log(error);
      } else {
        resolve(analysis);
      }
    })
  });
}


