var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
// var personality = require("../data/personalityArray");
var tone = require("../data/toneArray");
module.exports = function(app,personalityData) {
  // console.log(app);
  // console.log(personalityData);
  app.get("api/personality", function (req,res){
    console.log(req);
    console.log(personalityData);

    res.json(personalityData);
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
  app.post('/twitterName',(req,res)=>{
    console.log(req.body.name);
    var screenName = req.body.name;
    require('../data/twitter')(app,screenName);

  })
};
