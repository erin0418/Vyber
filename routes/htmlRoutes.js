var path = require("path");

module.exports = function(app) {
  // Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load index page
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load create account page
  app.get("/createAccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createAccount.html"));
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
};
