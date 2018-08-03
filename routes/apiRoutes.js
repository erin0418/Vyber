var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
var twitterContent = require("../data/twitter.js");


var db = require("../models");



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

  });

  app.post("/api/users", function (req, res) {
    db.localUser.findOne({
      where: {
        username: req.body.username
      } 
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });
   app.post("/api/users", function(req, res){
    db.localUser.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(dbusers) {
      // if name
      res.json(dbusers);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

};

  app.post('/ToneRoute', (req, res) => {
    var screenName = req.body.name;
    twitterContent(screenName)
      .then(function (content) {
        Tone(content).then(function (analysis) {
            res.json(analysis);
          })
      });
  })


