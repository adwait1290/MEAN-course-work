var path = require('path');
var friends = require('./../controllers/friends.js');

module.exports = function(app){
  app.get('/friends', friends.getFriends);
  app.get('/show/:id', friends.showFriend);
  app.get('/edit/:id', friends.showFriend);
  app.post('/friend', friends.addFriend);
  app.put('/friend/:id', friends.updateFriend);
  app.delete('/friend/:id', friends.deleteFriend);
};