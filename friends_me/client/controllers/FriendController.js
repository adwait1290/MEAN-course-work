

app.controller('FriendController', ['$scope', '$location', '$routeParams', 'FriendFactory', function($scope, $routeParams, $location, FriendFactory){
  function getFriends(){
    FriendFactory.getFriends(function(data){
      $scope.friends = data;
    })
  }
  getFriends();
  console.log($scope.friends);
  $scope.addFriend = function(friend){
    FriendFactory.addFriend(friend, getFriends);

  };
  $scope.deleteFriend = function(id){
    FriendFactory.deleteFriend(id, getFriends);
  };
  $scope.updateFriend = function(editedFriend){
    FriendFactory.updatedFriend($routeParams._id, editedFriend, getFriends);
  };

}])