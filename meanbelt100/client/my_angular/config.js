var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		})
		.when('/wall', {
			templateUrl: 'partials/wall.html', 
			controller: 'indexController'
		})
		.when('/new_question', {
			templateUrl: 'partials/new.html',
			controller: 'indexController'
		})
		.when('/questions/answer/:_id',{
			templateUrl: "/partials/answer.html",
			controller: "questionController"
		})
		.when('/questions/:_id',{
			templateUrl: "/partials/question.html",
			controller: "answerController"
		})
		.otherwise({
			redirectTo: '/'
		})
})