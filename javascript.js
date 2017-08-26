//my array of topics
var topics = 	["pumpkins", "apples", "donuts", "cider", "witches", 
				"halloween", "ghosts", "halloween candy", "full moon", "vampires"];



function buttonMaker() {

	//empties the div so all the buttons can be rewritten whenever a new array index is included
	$("#halloween-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#halloween-buttons").append("<button type=button class='topic-button'>" + topics[i] + "</button>");
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




$(".topic-button").on("click", function() {
	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=5";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); //test

		//targets the URL in the info for api results
		//something is wrong here. can't seem to target what I need out of the object correctly
		//you are pulling up 5 indices when you pull info from the API. 
		//you need to loop through the array to pull out all 5 gif urls.
		//i already added a "j" as a reminder
		var results = response.data;

		//creates a new <img> tag, then adds a soure to it, and then the alternate title
		//so far i am getting the alt message because imageURL isn't working properly
		var newImage = $("<img>");
		newImage.attr("src", results[0].images.fixed_height_still.url);
		newImage.attr("alt", "missing gif");

		$("#halloween-gif").append(newImage);

		//when you click on the gif, it needs to go from fixed_height_still.url to fixed_height.url 
	});



})
