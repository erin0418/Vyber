// var passport = require('passport-twitter');



// module.exports = function (passport) {

//     passport.use(new TwitterStrategy({
//             consumerKey: '1SCaB9nopXJmHtYkhhu21ziGK',
//             consumerSecret: 'w3n1JyJi3oBosVhhZ8WCmMW2VLVWIRmJSrDHPoa21B9V6BXOyJ',
//             callbackURL: 'https://thawing-peak-96935.herokuapp.com/',
//         },
//         function (token, tokenSecret, profile, cb) {
//             User.findOrCreate({
//                 twitterId: profile.id
//             }, function (err, user) {
//                 cosnole.log(err);
//                 cosnole.log("hello");

//                 return cb(err, user);
//             });
//         }
//     ));
// }