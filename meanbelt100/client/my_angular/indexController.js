app.controller('indexController', ['$scope', '$location', 'Factory', function($scope, $location, Factory){
	function currentUser(){
		Factory.currentUser(function(data){
			$scope.user = data;
		});
	}
	function getQuestions(){
		Factory.getQuestions(function(data){
			$scope.questions = data;
		})
	};
	getQuestions();
	currentUser();
		$scope.addQuestion = function(question){
			Factory.addQuestion(question, getQuestions);
			$scope.newQuestion = {};
		}
		
	}]);