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



/*the on-click event has to be written this way because a $("#target-id").on("click") will only work once
per page load and ignore any updated information (like NEW buttons showing up). This way of writing the on-click
allows for new buttons to appear and have the on-click function still work. The submit button never changes, so
its on-click function is fine the way it is*/
$(document).on("click", ".topic-button", function() {
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
		//this will be where results[0] is now
		var results = response.data;

		//creates a new <img> tag, then adds a soure to it, and then the alternate title
		//I should change the class an id each gif will receive
		var newImage = $("<img>");
		newImage.attr("src", results[0].images.fixed_height_still.url);
		newImage.attr("alt", "missing gif");
		newImage.attr("class", "new-gif");

		$("#halloween-gif").append(newImage);

		//when you click on the gif, it needs to go from fixed_height_still.url to fixed_height.url 
		//the function works, however each click causes ALL gifs to start and stop at the same time
		//that's because I set them equal to a class. I should give each gif their own ID and target that instead
		var isMoving = false;
		$(document).on("click", ".new-gif", function() {

			if (!isMoving) {
				newImage.attr("src", results[0].images.fixed_height.url); //makes the gif move
				isMoving = true;
			} else {
				newImage.attr("src", results[0].images.fixed_height_still.url); //makes the gif stop
				isMoving = false;
			}



		});







	});



})
