var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
var twitterContent = require("../data/twitter.js");
var Tone = require("../data/tone.js");
module.exports = function(app) {

  // app.get("/twitterName", function (req,res){
  //   // console.log(req)
    
  // })
  // app.get("/api/tone", function (req,res){
  //   res.json(tone);
  // })
  // app.post("/api/personality", function(req, res) {
  //   personality.push(Personality.result);
  // });

  // app.post("/api/tone", function(req, res) {
  //   tone.push(Tone.result);
  // });
  app.post('/twitterName',(req,res)=>{
    console.log(req.body.name);
    var screenName = req.body.name;
    
    twitterContent(screenName)
    .then(function(content){
      Personality(content)
      .then(function(analysis){
        res.json(analysis);
      })
    });
  })
  app.post('/ToneRoute', (req, res) => {
    var screenName = req.body.name;
    twitterContent(screenName)
      .then(function (content) {
        Tone(content).then(function (analysis) {
            res.json(analysis);
          })
      });
  })
};
