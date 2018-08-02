var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
var personality = require("../data/personalityArray");
var tone = require("../data/toneArray");

module.exports = function(app) {
  app.get("api/personality", function (req,res){
    res.json(personality);
  })
  app.get("api/tone", function (req,res){
    res.json(tone);
  })
  app.post("api/personality", function(req, res) {
    personality.push(Personality.result);
  });

  app.post("api/tone", function(req, res) {
    tone.push(Tone.result);
  });
};
