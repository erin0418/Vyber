// var Text = require("../public/tone")
module.exports = function (Tweets) {
  return new Promise((resolve, reject) => {


    var authTone = require("../keys/toneKey");

    var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");


    var toneAnalyzer = new ToneAnalyzerV3({
      version: authTone.version,
      username: authTone.username,
      password: authTone.password
    });
    var utterances = []
    for (var i = 0; i < Tweets.contentItems.length; i++) {
      var tweetObject = {
        "text":Tweets.contentItems[i].content,
        "user":Tweets.contentItems[i].id
      };
      
      utterances.push(tweetObject);

    };

    var toneChatParams = {
      utterances: utterances
    };

    toneAnalyzer.toneChat(toneChatParams, function (error, analysis) {
      if (error) {
        console.log(error);
      } else {
        resolve(analysis);
      }
    });
  });

}