var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
var twitterContent = require("../data/twitter.js");
var db = require("../models");


module.exports = function (app) {

  app.post('/twitterName', (req, res) => {
    console.log(req.body.name);
    var screenName = req.body.name;

    twitterContent(screenName)
      .then(function (content) {
        Personality(content)
          .then(function (analysis) {
            res.json(analysis);
          })
      });

  });

  app.post("/api/users", function (req, res) {
    db.localUser.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (dbusers) {
      res.json(dbusers);
    });
  });
  app.post("/api/usersCreate", function (req, res) {
    db.localUser.create({
        username: req.body.username,
        password: req.body.password
      }).then(function (dbusers) {
        res.json(dbusers);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/ToneRoute', (req, res) => {
    var screenName = req.body.name;
    twitterContent(screenName)
      .then(function (content) {
        Tone(content).then(function (analysis) {
          res.json(analysis);
        })
      });
  })

  app.get("/api/reactTest", function (req, res) {
    db.localUser.findAll({}).then((results) => {
      res.json(results);
    })
  });

};