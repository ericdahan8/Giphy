//array of example gifys
var arrays = ["happy", "angry", "sad", "confused"];

function renderButtons() {
  // Deleting the giphy prior to adding new ones
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // For loop
  for (var i = 0; i < arrays.length; i++) {
    // Then dynamicaly generating buttons in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("array");
    // Added a data-attribute
    a.attr("data-name", arrays[i]);
    // Provided the initial button text
    a.text(arrays[i]);
    // Added the button to the HTML
    $("#buttons-view").append(a);
  }
}
//////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// This function handles events where one button is clicked

$("#add-array").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var array = $("#array-input")
    .val()
    .trim();

  // The giphy from the textbox is then added to our array
  arrays.push(array);

  // Calling renderButtons which handles the processing of our giphy array
  renderButtons();
});

///////////////////////////////////////////////////////////////////////////////////////
//on click function for dynamic buttons
$(document).on("click", ".array", function(event) {
  //store in the giphy container
  $(".giphContainer").text("");
  console.log($(event.target).text());
  //get the giphy from url
  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=" +
      //targets the event to ensure it prints the appropriate gipghy
      $(event.target).text() +
      "&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  //for loop that adds new arrays into their own variable of <img>, attri, and class
  //then appends to the container
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

//The work above handles the dynamic buttons
//ensuring that when we click the new added arrays we can
//Get the giphy accordingly.
////////////////////////////////////////////////////////////////////////////////////////
$("#submit").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=" +
      //enables the output to be the desired search value
      $("#search").val() +
      "&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});
// the work above is the search function permitting the user to search any giphy they want
////////////////////////////////////////////////////////////////////////////////////////
$("#random").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    //by changing the word following the equals we can ensure it outputs "funny"
    "https://api.giphy.com/v1/gifs/search?q=funny&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

$("#meme").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=meme&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

$("#dog").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=dog&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

$("#cat").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=cat&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

$("#shark").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=shark&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});

$("#unicorn").on("click", function() {
  $(".giphContainer").text("");

  var gifGet = $.get(
    "https://api.giphy.com/v1/gifs/search?q=unicorn&api_key=YVWBiqYGhjDMVgKFVjX8yFb0lsY0JReJ&limit=10"
  );
  gifGet.done(function(gif) {
    for (var i = 0; i < gif.data.length; i++) {
      var newGify = $("<img/>");
      newGify.attr("src", gif.data[i].images.fixed_height.url);
      newGify.addClass("images");
      $(".giphContainer").append(newGify);
    }
  });
});
////The work above indicates the preset buttons
