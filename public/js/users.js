var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var users = sequelize.define("users", {
    email: Sequelize.STRING,
    pword: Sequelize.STRING
});

users.sync();

module.exports = users;