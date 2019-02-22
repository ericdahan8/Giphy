$("#submit").on("click", function() {
  $(".giphContainer").text("");

  var gify = $.get(
    "https://api.giphy.com/v1/gifs/search?q=" +
      $("#search").val() +
      "&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ"
  );
  gify.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});
