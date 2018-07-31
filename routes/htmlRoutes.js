var db = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/login", function(req, res) {
    db(res);
  });

  // Load index page
  app.get("/index", function(req, res) {
    db(res);
  });

  // Load personality page
  app.get("/personality", function(req, res) {
    db(res);
  });
  // Load image page
  app.get("/image", function(req, res) {
    db(res);
  });
  // Load tone page
  app.get("/tone", function(req, res) {
    db(res);
  });
};
