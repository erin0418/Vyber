require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3111;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));



// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
