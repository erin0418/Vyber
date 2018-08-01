var passport = require('passport-twitter');



module.exports = function (passport) {

    passport.use(new TwitterStrategy({
            consumerKey: 'KcWG88YehfLAK9Hw5c77MKRpE',
            consumerSecret: '1Vw4O8HvskvZSr2I0ory2f1OfAZzHpcSpRiYNt126vxx8naDcA',
            // callbackURL: x,
        },
        function (token, tokenSecret, profile, cb) {
            User.findOrCreate({
                twitterId: profile.id
            }, function (err, user) {
                return cb(err, user);
            });
        }
    ));
}