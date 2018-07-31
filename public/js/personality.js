function runPersonalityAPI() {
  $.ajax({ url: "/api/personality", method: "GET" }).then(function(results) {
    for (var i = 0; i < results.length; i++) {
      $("body").text(results[i]);
    }
  });
}
runPersonalityAPI();
