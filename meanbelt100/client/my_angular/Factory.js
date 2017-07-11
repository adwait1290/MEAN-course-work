app.factory('Factory', ['$location', '$http', function($location, $http){
	var factory = {};
	factory.register = function(user){
		$http({
			url: '/register', 
			method: 'POST',
			data: user
		}).then(function(res){
			console.log(res);
			$location.url('/wall');
		}, function(res){
			console.log(res);
		})
	};
	factory.currentUser = function(callback){
		$http({
			url: '/current', 
			method: 'GET'
		}).then(function(res){
			callback(res.data);
		}, function(res){
			$location.url('/')
			console.log(res);
		})

	};
	factory.login = function(user){
		$http({
			url:'/login', 
			method: 'POST',
			data: user
		}).then(function(res){
			$location.url('/wall')
		}, function(res){
			console.log(res);
		})
	};
	factory.getQuestions = function(callback){
		$http({
			url:'/questions',
			method: "GET"
		}).then(function(res){
			callback(res.data);
		}, function(err){
			console.log(err);
		})

	};
	factory.addQuestion = function(question, callback){
		$http({
			url:'/new_question',
			method: 'POST',
			data: question
		}).then(function(res){
			$location.url('/wall');
			callback();
		}, function(err){
			console.log(err);
		})
	},
	factory.getUsers = function(callback){
		$http({
			url:"/users",
			method: "GET"
		}).then(function(res){
			callback();
		}, function(err){
			console.log(err);
		})
	},
	factory.getQuestion = function(id, callback){
		$http ({
			url:'/questions/answer/' + id,
			method: "GET"
		}).then(function(res){
			console.log(res);
			callback(res.data);
			
		}, function(err){
			console.log(err);
		})
	},
	factory.addAnswer = function(answer, question_id){
		$http({
			url:'/answer/' + question_id,
			method: "POST",
			data: answer
		}).then(function(res){
			$location.url('/wall');
		}, function(err){
			console.log(err);
		})
	},
	factory.getQuestionA = function(id, callback){
		$http ({
			url:'/questions/' + id,
			method: "GET"
		}).then(function(res){

			callback(res.data);
			console.log(res);
		}, function(err){
			console.log(err);
		})
	},
	factory.createLike = function(answer_id,callback){
		console.log(answer_id);
		$http ({
			url: "/like/" + answer_id,
			method: "POST"
		}).then(function(res){
			callback();
		}, function(err){
			console.log(err);
		})
	},
	factory.getAnswers = function(id, callback){
		$http ({
			url: "/questions/" + id,
			method: "GET"
		}).then(function(res){
			callback(res.data);
			console.log(res);
		}, function(err){
			console.log(err);
		})
	}
	// factory.addPost = function(post, callback){
	// 	console.log('printing data in the factory ', post)
	// 	$http({
	// 		url:'/post', 
	// 		method: 'POST', 
	// 		data: post
	// 	}).then(function(res){
	// 		// console.log(res);
	// 		callback();
	// 	}, function(res){
	// 		console.log(res);
	// 	})
	// };
	// factory.getPosts = function(callback){
	// 	$http({
	// 		url: '/posts', 
	// 		method: 'GET'
	// 	}).then(function(res){
	// 		console.log(res);
	// 		callback(res.data);
	// 	}, function(res){
	// 		console.log(res);
	// 	})
	// };
	// factory.addComment = function(comment, post_id, callback){
	// 	$http({
	// 		url: '/comment/' + post_id,
	// 		method: 'POST', 
	// 		data: comment
	// 	}).then(function(res){
	// 		callback();
	// 		console.log(res);
	// 	}, function(res){
	// 		console.log(res);
	// 	})
	// }
	return factory;
}])