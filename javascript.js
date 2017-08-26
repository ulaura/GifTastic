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

//accessing the API
//api is being accessed, but I'm not calling in the correct info. 
//something is wrong with my queryURL. I suspect it's the id s#topic-button.
//limit=5 is working.
//apiKey is working.
//.done(function(response)) is working
$("button").on("click", function() {
	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $("#topic-button") + "&api_key=" + apiKey + "&limit=5";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); //test



	});



})
