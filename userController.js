app.controller('userController', ['$scope', '$location', 'Factory', '$routeParams',function($scope, $location, Factory, $routeparams){
	function currentUser(){
		Factory.currentUser(function(data){
			$scope.currentuser = data;

		})
		Factory.getEvent
	}
}])