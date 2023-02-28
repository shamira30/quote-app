const quoteText = document.querySelector (".quote"),
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button");

//random quote function
function randomQuote(){
    console.log("Clicked")
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.content;
        

    })
}   

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

function get_quote_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_quote_of_the_day()

{
    "success": {
      "total": 1
    },
    "contents": {
      "quotes": [
        {
          "quote": "If you respect yourself in stressful situations, it will help you see the positiveâ€¦ It will help you see the message in the mess.",
          "length": "135",
          "author": "Steve Maraboli",
          "tags": [
            "inspire",
            "self-respect",
            "stress"
          ],
          "category": "inspire",
          "language": "en",
          "date": "2020-02-02",
          "permalink": "https://theysaidso.com/quote/steve-maraboli-if-you-respect-yourself-in-stressful-situations-it-will-help-you",
          "id": "nwW3g7V0xszGDNIehz6yTgeF",
          "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
          "title": "Inspiring Quote of the day"
        }
      ]
    },
    "baseurl": "https://theysaidso.com",
    "copyright": {
      "year": 2022,
      "url": "https://theysaidso.com"
    }
  }