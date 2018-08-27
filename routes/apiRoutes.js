var Personality = require("../data/personality.js");
var Tone = require("../data/tone.js");
var twitterContent = require("../data/twitter.js");
var db = require("../models");


module.exports = function (app) {

  app.post('/personality', (req, res) => {
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
  app.post("/api/usersId", function (req, res) {
    db.User.findOne({
      where: {
        id: req.body.id
      }
    }).then(function (dbusers) {
      console.log(dbusers)
      res.json(dbusers);
    });
  });

  app.post("/api/users", function (req, res) {
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (dbusers) {
      console.log(dbusers)
      res.json(dbusers);
    });
  });
  app.post("/api/usersCreate", function (req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
      }).then(function (dbusers) {
        res.json(dbusers);
      })
      .catch(function (err) {
        console.log(err)
        res.json(err);
      });
  });

  app.post("/api/posts", function (req, res) {
    db.Post.create({
        Link: req.body.Link,
        UserId: req.body.UserId,
      }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  app.post("/api/postsSearch", function (req, res) {
 
    db.Post.findAll({
      where:{
        UserId: req.body.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (err) {
      console.log(err)
      res.json(err);
    });;
  });
  app.post("/api/comments", function (req, res) {
    db.Comment.create({
      body: req.body.link,
      UserId: req.body.UserId,
      PostId: req.body.PostId,
      username: req.body.username
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  app.post("/api/commentSearch", function (req, res) {
    db.Comment.findAll({
      where:{
        PostId: req.body.postid
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });


  app.post('/tone', (req, res) => {
    var screenName = req.body.name;
    twitterContent(screenName)
      .then(function (content) {
        Tone(content).then(function (analysis) {
          res.json(analysis);
        })
      });
  })
};