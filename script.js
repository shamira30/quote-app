$("button").on("click", function() {
    var person = $(this).attr("Selena Gomez");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=DK82uFdy1Fn63dlP8LypoNzoPJCVAbwz&tag=funny&rating=g" + Selena Gomez + "DK82uFdy1Fn63dlP8LypoNzoPJCVAbwz";
    
$.ajax ({
    url: queryURL
    method: "GET"
})
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results [i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results [i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }
    });
});