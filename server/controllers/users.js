var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, users){
				if(err){
					console.log("db is empty")
				} else {
					res.json(users);
				}
			});

		}, 
		create: function(req, res){

		}, 
		delete: function(req, res){
			
		}

	}
})();