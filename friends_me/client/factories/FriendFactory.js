
app.factory("FriendFactory", ['$location', '$http', function($location, $http){

	var factory = {};
	factory.getFriends = function(callback){

		$http({
			url:'/friends',
			method:'GET'
		}).then(function(res){

			callback(res.data);

		}, function(err){

			console.log(err);
		}
		)};
	factory.addFriend = function(friend, callback){
		$http ({
			url: '/friend',
			method: 'POST',
			data: friend
		}).then(function(res){

			callback();
			$location.url('/friends/show/' + res.data._id);

		}, function(err){

			console.log(err);
		})
	};
	factory.deleteFriend = function(id, callback){
		$http ({
			url: '/friend/' + id,
			method: "DELETE"
		}).then(function(res){
			callback();
			
		}, function(err){
			console.log(err);
		})
	},
	factory.updateFriend = function(id, editedFriend, callback){
		$http ({
			url: '/friend/' + id,
			method: "PUT",
			data: editedFriend
		}).then(function(res){
			console.log(res);
			$location.url('/');
			callback();

		}, function(err){
		console.log(err);
	})
	};
	factory.showFriend = function(id, callback){
		$http ({
			url: '/show/' + id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res);
		}, function(err){
			console.log(err);
		})
	};
		return factory;
}


]);




	
