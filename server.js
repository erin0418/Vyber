require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");


// passport
// var passport = require('passport')
// var session = require("express-session")
// TwitterStrategy = require('passport-twitter').Strategy;


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


// passport middleware
// app.use(require('express-session')({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// require('./routes/auth')(passport)



// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
// require("./data/twitter.js")(app);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
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
