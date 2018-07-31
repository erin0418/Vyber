function runToneAPI() {
  $.ajax({ url: "/api/tone", method: "GET" }).then(function(results) {
    for (var i = 0; i < results.length; i++) {
      $("body").text(results[i]);
    }
  });
}
runToneAPI();
