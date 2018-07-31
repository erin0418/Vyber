var db = require("../models");
var path = require("path");


module.exports = function(app) {

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
 app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 })
  // facImage html file
   app.get('/images', (req, res) => {
     res.sendFile(path.join(__dirname, "../public/facImage.html"));
   })
};
