var path = require("path");
// var passport = require('passport')


module.exports = function(app) {
  // Load login page
  app.get("https://thawing-peak-96935.herokuapp.com/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load index page
  app.get("https://thawing-peak-96935.herokuapp.com/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load create account page
  app.get("https://thawing-peak-96935.herokuapp.com/createAccount", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/createAccount.html"));
  });

  app.get("https://thawing-peak-96935.herokuapp.com/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load personality page
  app.get("https://thawing-peak-96935.herokuapp.com/personality", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/personality.html"));
  });
  // Load image page
  app.get("https://thawing-peak-96935.herokuapp.com/images", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/facImage.html"));
  });
  // Load tone page
  app.get("https://thawing-peak-96935.herokuapp.com/tone", function (req, res) {
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
