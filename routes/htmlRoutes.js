var path = require("path");
// var passport = require('passport')


module.exports = function(app) {
  // Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load index page
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load personality page
  app.get("/personality", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/personality.html"));
  });
  // Load image page
  app.get("/images", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/facImage.html"));
  });
  // Load tone page
  app.get("/tone", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tone.html"));
  });

  // app.get('/auth/twitter', passport.authenticate('twitter'));

  // app.get('/auth/twitter/callback',
  //   passport.authenticate('twitter', {
  //     failureRedirect: '/login'
  //   }),
  //   function (req, res) {
  //     // Successful authentication, redirect home.
  //     res.json(req);
  //     res.redirect('/');
  //   });
};
