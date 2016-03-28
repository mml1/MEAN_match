
var users = require("./../controllers/users.js");

module.exports = function(app){
	app.get("/REPLACE", function(req, res){
		users.index(req, res);
	});
}