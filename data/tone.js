// var Text = require("../public/tone")

var authTone = require("../keys/toneKey");

var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

var analysis;

var toneAnalyzer = new ToneAnalyzerV3({
  version: authTone.version,
  username: authTone.username,
  password: authTone.password
});
var text = "Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text.Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text. Hello, this is a sample text.";

var toneParams = {
  tone_input: { text: text },
  content_type: "application/json"
};

toneAnalyzer.tone(toneParams, function(error, analysis) {
  if (error) {
    console.log(error);
  } else {
    analysis;
  }
});
0;

module.exports = {
  result: analysis,
}

