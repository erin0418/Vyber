var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

var toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  username: "10daf4a5-7dad-47f9-916a-d09407b50af0",
  password: "JN3bHeGkTg7x"
});

// This text will be pulled for the user input on the front end.
var text =
  "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!";

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

module.exports = toneAnalyzer;
