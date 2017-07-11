console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({

	name: String,

	favoriteLanguage:String,

	});
mongoose.model('Friend', FriendSchema);