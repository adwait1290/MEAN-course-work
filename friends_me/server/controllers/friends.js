
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
	getFriends: function(req, res){
		Friend.find({}, function(err, data){
			if (err) {

				console.log(err);
				res.status(400).send("Problem Saving Friend")

			}
			else {

				res.json(data);
			}
		});
	},
			addFriend: function(req,res){
				var friend = new Friend(req.body);
				friend.save(function(err,friend){

					if(err){

						console.log(err);
						res.status(400);

					}
					else {
						console.log(friend);
						res.json(friend);
					}
				});

			},
			deleteFriend: function(req, res){
				Friend.findOne({_id: req.params.id}, function(err, friend){
					if (err) {

						res.status(400).send(err);

					}
					else {

						friend.remove();
						res.status(200).send(err);

					}
				});
			},
			showFriend: function(req, res){
				Friend.findOne({_id: req.params.id}, function(err, friend){
					if(err) {

						res.status(200).send(err);

					}
					else {

						res.json(friend);
					}
				});
			},
			updateFriend: function(req, res){
				console.log(req.body);
				Friend.findOne({_id: req.params.id}, function(err, friend){
					if (err) {

						res.status(200).send(err);

					}
					else {
						friend.first_name = req.body.first_name;
						friend.last_name = req.body.last_name;
						friend.favoriteLanguage = req.body.favoriteLanguage;
						friend.birthday = req.body.birthday;
						friend.save(function(err, updatedFriend){
							if (err) {
								console.log(err);
							}
							else {
								res.json(updatedFriend);
							}
						});
						
						}
					});
			}
		}


			

			
