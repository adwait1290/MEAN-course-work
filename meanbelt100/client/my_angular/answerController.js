app.controller('answerController', ['$scope', '$location', 'Factory','$routeParams', function($scope, $location, Factory, $routeParams){
	function currentUser(){
		Factory.currentUser(function(data){
			$scope.user = data;
		})
	}
	function getQuestion(){
		Factory.getQuestion($routeParams._id, function(data){
			console.log(data);
			$scope.question = data;
			console.log(data.answers);
		})
	}
	function getUsers(){
		Factory.getUsers(function(data){
			$scope.users = data;
			console.log(data);

			
		})
	}
	getQuestion();
	currentUser();
	getUsers();
	
		$scope.addAnswer = function(answer, question_id){
			Factory.addAnswer(answer, question_id);
			$scope.newAnswer = {};
		}
		$scope.addLike = function(answer_id){
			Factory.createLike(answer_id, getQuestion);
		}
	}]);