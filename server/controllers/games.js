var mongoose = require("mongoose");
var Game = mongoose.model("Game");

module.exports = (function(){
	return {
		index: function(req, res){
			Game.find({}, function(err, games){
				if(err){
					console.log("db is empty")
				} else {
					res.json(games);
				}
			});

		}, 
		create: function(req, res){
			var g = new Game(req.body)
			g.save(function(err){
				if(err){
					console.log(err)
				} else{
					res.redirect("/")
				}
			});

		}, 
		delete: function(req, res){
			
		}

	}
})();