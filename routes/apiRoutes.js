var Personality = require("../data/personality.js");
var dataTone = require("../data/tone.js");
var db = require("../models");

module.exports = function(app) {
  app.post("api/personality", function(req, res) {
    Personality.personalityInsights.profile(Personality.profileParams, function(
      error,
      profile
    ) {
      if (error) {
        console.log(error);
      } else {
        res.send(JSON.stringify(profile, null, 2));
      }
    });
  });

  app.post("/api/tone", function(req, res) {
      res.send(dataTone);
    });
  };

  app.get("/api/users/:id", function (req, res) {
    db.users.findOne({
      where: {
        userName: req.params.id
      } 
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.post("/api/users", function(req, res){
    db.users.create({
      userName: req.body.userName,
      pword: req.body.pword
    }).then(function(dbusers) {
      // if name
      res.json(dbusers);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
