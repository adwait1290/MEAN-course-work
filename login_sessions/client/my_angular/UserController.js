app.controller('userController', function($scope, $routeParams, userFactory) {
	var id = $routeParams.id;
	
	$scope.checkUser = function(user) {
		userFactory.readUsers(user, function(data) {
		})
	}

	userFactory.viewUser(id, function(data) {
		$scope.user = data;
	})

})

app.controller('dashboardController', function($scope, userFactory) {

	userFactory.readUser(function(data) {
		$scope.user = data;
	})
})