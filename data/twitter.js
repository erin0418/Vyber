var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '1SCaB9nopXJmHtYkhhu21ziGK',
    consumer_secret: 'w3n1JyJi3oBosVhhZ8WCmMW2VLVWIRmJSrDHPoa21B9V6BXOyJ',
    access_token_key: '355890758-qy3ph3nGhAvtFhAfQw4wA1bP3wYjDxYrc18bb9ZR',
    access_token_secret: 'h1rl5Xg62zwAK6Wr4P0TJp6f7lQyPihQO3A37CaPnbvDI'
});


module.exports = function (screenName) {
    // console.log(screenName)
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