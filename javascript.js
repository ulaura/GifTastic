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


//problem: whenever i try to add a new button, it appears and disappears right away
//I don't think I am targetting the submit button correctly. 
//The test within the function is not working. Nothing logs to the console.
$("#additional").on("click", function() {
	var userInput = $("#halloween-input").val();
	topics.push(userInput);
	buttonMaker();
	console.log(topics); //test

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
