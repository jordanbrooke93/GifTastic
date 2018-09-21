var topics = ["basketball", "coffee", "wonder woman", "thunderstorms", "water"];

function displayGifs() {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=ntePvm7WH9cAYtz8hn8VJgRNezMdaG7u&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var requested = response.data;

        for (var y = 0; y < requested.length; y++) {

            var gifDiv = $("<div>")
            var rating = requested[y].rating
            var image = $("<img>")
            var paragraph = $("<p>")

            paragraph.append("Rating: " + rating)
            gifDiv.append(paragraph)
            image.attr("src", requested[y].images.fixed_height.url)
            gifDiv.append(image)
            $("#gifs-appear-here").prepend(image)
             $(image).text(rating)
        }
    })
}

// function for to renderButtons()
function renderButtons() {
    // make $("#all-searches").empty();
    $("#all-searches").empty();
    // create for loop to loop through topics
    for (var i = 0; i < topics.length; i++) {
        // dynamically create buttons for each topic in the array
        var b = $("<button>");
        // add a class - .addclass
        b.addClass("topic");
        // add attribute .attr
        b.attr("data-name", topics[i]);
        // give the buttons text from the topic in the array- .text(topics[i])
        b.text(topics[i]);
        // add button to the html all-searches.append(b) 
        $("#all-searches").append(b);
    }
}

// create function that handles the event when one button is clicked
$("#add-search").on("click", function (event) {
    // add event.preventDefault();
    event.preventDefault();
    // create a var topic = $("#search-input").val().trim(); that will grab text from the input box
    var topic = $("#search-input").val().trim();
    // push topic into topics... topics.push(topic);
    topics.push(topic);
    // call renderButtons();
    renderButtons();
})

$(document).on("click", ".topic", displayGifs);

renderButtons();
