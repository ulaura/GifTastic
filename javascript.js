//my array of topics
var topics = 	["pumpkins", "apples", "donuts", "cider", "witches", 
				"halloween", "ghosts", "halloween candy", "full moon", "vampires"];

function buttonMaker() {
	for (var i = 0; i < topics.length; i++) {
		$("#halloween-buttons").append("<button type=button>" + topics[i] + "</button>");
	};
};

buttonMaker();

