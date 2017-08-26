//my array of topics
var topics = 	["pumpkins", "apples", "donuts", "cider", "witches", 
				"halloween", "ghosts", "halloween candy", "full moon", "vampires"];



function buttonMaker() {

	//empties the div so all the buttons can be rewritten whenever a new array index is included
	$("#halloween-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#halloween-buttons").append("<button type=button id='topic-button'>" + topics[i] + "</button>");
	};


};


buttonMaker();


//on-clicik event to accept user's input, append it to the topics array,
//and turn the input into a new button
$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#halloween-input").val().trim();

	//if the text input is empty, a new button should NOT be created
	if (!userInput == " ") {
		topics.push(userInput);
		buttonMaker();
		console.log(topics); //test
		userInput = $("#halloween-input").val(" ");
	}
});


$("<button>").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $("#topic-button").val() + "&api_key=" + apiKey + "&limit=5";
	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){




	});



})
