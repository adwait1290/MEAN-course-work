app.controller('EditFriendController', ['$scope', '$routeParams', '$location', 'FriendFactory', function($scope, $routeParams, $location, FriendFactory){
  function showFriend(){
    FriendFactory.showFriend($routeParams._id, function(data){
    	console.log(data);
      	$scope.friend = data;
    })
}
	showFriend();
	$scope.updateFriend = function(editedFriend){
		console.log(editedFriend);
    	FriendFactory.updateFriend($scope.friend._id, editedFriend, showFriend);
  };
}])