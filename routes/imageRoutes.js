var db = require("../models");
var path = require("path");

module.exports = function (app) {
    app.get('/images',(req,res)=>{
        res.sendFile(path.join(__dirname, "../public/facImage.html"));
    })
};
