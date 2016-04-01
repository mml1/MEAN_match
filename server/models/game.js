var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GameSchema = new mongoose.Schema({
	pairs: Number,
	misses: Number,
	playTime: Number,
	moves: Number,
	created_at: {type: Date, default: Date.now},
});
mongoose.model("Game", GameSchema);