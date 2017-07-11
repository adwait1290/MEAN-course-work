app.factory('userFactory', function($http, $location) {
	var factory = {};
	var thisUser = null;

	factory.readUsers = function(user, callback) {
		var newUser = true;
		$http.get({
			url: '/user',
			method:"get"
		}).then(function(res){



			callback(res.data);



		}, function(err){


			console.log(err);

			
		})




		function(data) {
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}	
			})          	
// If user does not exist, create new user and redirect to dashboard
			if(newUser == true) {	
				console.log("User is new, Creating...");
				$http.post('/user', user).success(function(data) {
					console.log("New user has been created...")
					thisUser = data;
					$location.path('/dashboard');
				})
			}
			callback(thisUser);	
		})
		
	}

	factory.readUser = function(callback) {
		callback(thisUser);
	}


	factory.viewUser = function(id, callback) {
		$http.get('/user/'+id).success(function(data) {
			callback(data[0]);
		})
	}
	return factory;
})

