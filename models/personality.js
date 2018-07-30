var PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
var personalityInsights = new PersonalityInsightsV3({
  version: "2017-10-13",
  username: "5538cbe9-7251-46a1-906f-c4e87aecbc9f",
  password: "ckguLUDxBLFW"
});

var profileParams = {
  // Get the content from the JSON file.
  content: "Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works! Hello, it is very nice to met you. This is the first attempt of learning my Twitter personality information. I hope it works!",
  content_type: "text/plain",
  consumption_preferences: true,
  raw_scores: true
};

personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(profile, null, 2));
  }
});
