app.controller('questionController', ['$scope', '$location', 'Factory','$routeParams', function($scope, $location, Factory, $routeParams){
	function currentUser(){
		Factory.currentUser(function(data){
			$scope.user = data;
		})
	}
	function getQuestion(){
		Factory.getQuestion($routeParams._id, function(data){
			console.log(data);
			$scope.question = data;
			$scope.answers = data.answers;
			
		})
	}
	getQuestion();
	currentUser();
		$scope.addAnswer = function(answer, question_id){
			Factory.addAnswer(answer, question_id);
			$scope.newAnswer = {};
		}
	}]);