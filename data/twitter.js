var Twitter = require('twitter');
var TwitterClient = require("../keys/TwitterKey");

var client = new Twitter({
    consumer_key: TwitterClient.consumer_key,
    consumer_secret: TwitterClient.consumer_secret,
    access_token_key: TwitterClient.access_token_key,
    access_token_secret: TwitterClient.access_token_secret
});


module.exports = function (screenName) {

    return new Promise((resolve, reject) => {
            var params = {
                screen_name: screenName
            };
            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (!error) {
                    var content = {
                        "contentItems": []
                    };
                    for (var i = 0; i < tweets.length; i++) {
                        var tweetOjbect = {
                            "content": tweets[i].text,
                            "contenttype": "text/plain",
                            "created": tweets[i].created_at,
                            "id": tweets[i].id_str,
                            "language": tweets[i].lang
                        }

                        content.contentItems.push(tweetOjbect)

                    }
                    require('./personality')(content)
                    resolve(content);
                }

            })
        }
    );
}