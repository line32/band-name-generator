var express = require("express");  //assign identifier to npm package name
var app = express();
var port = process.env.PORT || 3000;

var Adjective = function() {
	this.plaid = true;
	this.tall = true;
	this.cranky = true;
	this.pristine = true;
	this.eloquent = true;	
};
var adjective = new Adjective();

function getRandomWord (object) {
	var propArray = Object.keys(object);
	var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
	return {word: randomProp};
}

app.get("/adjective", function (req, res) {
	res.send(getRandomWord(adjective));
});

app.get("/", function (req, res) {
	res.send("hello universe");
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});