var dataPersonality = require("../data/personality.js");
var dataTone = require("../data/tone.js");

console.log(dataPersonality);

module.exports = function(app) {
  app.get("api/personality", function(req, res) {
    res.send(dataPersonality);
  });

  app.post("api/tone", function(req, res) {
    res.send(dataTone);
  });
};
