var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FriendSchema = mongoose.Schema({
	first_name	:{ type: String, required: true },
	last_name	:{ type: String, required: true },
	favoriteLanguage	:{ type: String, required: true },
	birthday	:{ type: Date, required: true},
	created_at	:{ type: Date, default: Date.now}
});
mongoose.model("Friend", FriendSchema);