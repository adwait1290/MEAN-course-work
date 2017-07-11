app.controller('ShowFriendController', ['$scope', '$routeParams', '$location', 'FriendFactory', function($scope, $routeParams, $location, FriendFactory){
  function showFriend(){
    FriendFactory.showFriend($routeParams._id, function(data){
    	console.log(data);
      	$scope.friend = data;
    })
}
	showFriend();
}])
  