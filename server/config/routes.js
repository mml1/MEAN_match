
var games = require("./../controllers/games.js");

module.exports = function(app){
	app.get("/index", function(req, res){
		games.index(req, res);
	});
	app.post("/games", function(req, res){
		games.create(req, res);
	});
}