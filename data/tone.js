var authTone = require("../keys/toneKey");

var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

var result;

var toneAnalyzer = new ToneAnalyzerV3({
  version: authTone.version,
  username: authTone.username,
  password: authTone.password
});
var text =
  "Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson. Hello, this is a sample tweet that will be replaced with Twitter data that will come in from the Twitter login requirements. This will be the text that will be pushed through the personality API by Watson.";

var toneParams = {
  tone_input: { text: text },
  content_type: "application/json"
};

toneAnalyzer.tone(toneParams, function(error, analysis) {
  if (error) {
    console.log(error);
  } else {
    JSON.stringify(analysis, null, 2);
    result = analysis;
  }
});
0;

module.exports = result;
